// @vitest-environment jsdom

// ── External Dependencies & Registrations
import { beforeEach, describe, expect, it, vi } from 'vitest';

// ── Local Framework
import { Presenter } from '@/index';
import { useSampleData } from '@/composers/useSampleData';

// ── Mocks ────────────────────────────────────────────────────────────────────────────────────────────────────────────

// Tools are loaded at run time from the engine, so the tests supply stand-ins and check how they are used.
const tools = vi.hoisted(() => ({
    highcharts: {
        render: vi.fn(),
        renderCartesianChart: vi.fn(),
        renderPeriodFlowBoundaries: vi.fn(),
        renderPolarChart: vi.fn(),
        renderRangeChart: vi.fn(),
        setColorMode: vi.fn()
    },
    micromark: { highlight: vi.fn(), render: vi.fn(), setColorMode: vi.fn() }
}));
vi.mock('@dpuse/dpuse-shared', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    loadTool: vi.fn((_toolConfigs: unknown, name: string) => Promise.resolve(name === 'highcharts-visualiser' ? tools.highcharts : tools.micromark))
}));

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

const REFERENCE = { label: 'Average Headcount', path: 'hr/wrkForce/averageHeadcount' } as never;

function createPresenter(): Presenter {
    return new Presenter([], 'dark');
}

// The markdown tool turns visual blocks into elements carrying their options, which the presenter then fills in.
function encodeOptions(options: unknown): string {
    return encodeURIComponent(JSON.stringify(options));
}

function buildVisualOptions(views: object[]): object {
    return { content: { data: { measures: [{ id: 'openingHeadcount', values: [] }] } }, views };
}

async function renderHtml(html: string): Promise<HTMLElement> {
    tools.micromark.render.mockResolvedValue(html);
    const renderTo = document.createElement('div');
    await createPresenter().render(REFERENCE, renderTo);
    return renderTo;
}

describe('Presenter', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.spyOn(console, 'error').mockReturnValue();
    });

    it('lists the presentations in its config', () => {
        const presenter = createPresenter();

        expect(presenter.list()).toBe(presenter.config.presentations);
        expect(presenter.list().length).toBeGreaterThan(0);
    });

    it('renders the presentation’s markdown safely, with its label, highlighted in the current colour mode', async () => {
        const renderTo = await renderHtml('<h1>Average Headcount</h1><script>alert(1)</script>');

        const markdown = tools.micromark.render.mock.lastCall?.[0] as string;
        expect(markdown).not.toContain('{{label}}');
        expect(renderTo.querySelector('h1')?.textContent).toBe('Average Headcount');
        expect(renderTo.querySelector('script')).toBeNull();
        expect(tools.micromark.highlight).toHaveBeenCalledWith(renderTo, 'dark');
        expect(tools.highcharts.setColorMode).toHaveBeenCalledWith('dark');
    });

    it('renders each Highcharts block with its own options', async () => {
        const options = { chart: { type: 'line' } };

        const renderTo = await renderHtml(`<div class="dpuse-highcharts" data-options="${encodeOptions(options)}"></div>`);

        expect(tools.highcharts.render).toHaveBeenCalledWith(options, renderTo.querySelector('.dpuse-highcharts')?.firstElementChild);
    });

    describe('visuals', () => {
        it('adds a tab for each view it can draw, fills in sample data, and draws the default view', async () => {
            const views = [
                { categoryId: 'cartesianChart', typeId: 'line' },
                { categoryId: 'polarChart', typeId: 'column', default: true },
                { categoryId: 'rangeChart', typeId: 'areaRange' },
                { categoryId: 'periodFlowBoundariesChart' },
                { categoryId: 'valueTable' }
            ];

            const renderTo = await renderHtml(`<div class="dpuse-visual" data-options="${encodeOptions(buildVisualOptions(views))}"></div>`);

            const tabs = [...(renderTo.querySelector('.dp-tab-bar')?.children ?? [])].map((tab) => tab.textContent);
            expect(tabs).toEqual(['line', 'column', 'areaRange', 'periodFlowBoundariesChart']);
            const [, content] = tools.highcharts.renderPolarChart.mock.lastCall as [string, { data: { measures: { values: number[][] }[] } }];
            expect(tools.highcharts.renderPolarChart).toHaveBeenCalledWith('column', expect.anything(), expect.any(HTMLElement));
            expect(content.data.measures[0]?.values).toHaveLength(12);
        });

        it('draws the view whose tab is clicked', async () => {
            const views = [{ categoryId: 'cartesianChart', typeId: 'line' }, { categoryId: 'rangeChart', typeId: 'areaRange' }, { categoryId: 'periodFlowBoundariesChart' }];
            const renderTo = await renderHtml(`<div class="dpuse-visual" data-options="${encodeOptions(buildVisualOptions(views))}"></div>`);
            vi.clearAllMocks();

            const tabs = [...(renderTo.querySelector('.dp-tab-bar')?.children ?? [])] as HTMLElement[];
            for (const tab of tabs) tab.click();

            expect(tools.highcharts.renderCartesianChart).toHaveBeenCalledWith('line', expect.anything(), expect.any(HTMLElement));
            expect(tools.highcharts.renderRangeChart).toHaveBeenCalledWith('areaRange', expect.anything(), expect.any(HTMLElement));
            expect(tools.highcharts.renderPeriodFlowBoundaries).toHaveBeenCalledOnce();
        });

        it('shows a message in place of a visual whose options cannot be read', async () => {
            const renderTo = await renderHtml('<div class="dpuse-visual" data-options="not-json"></div>');

            expect(renderTo.querySelector('.dpuse-visual')?.textContent).toBe('Invalid options.');
        });
    });

    it('passes a colour mode change to the tools once they are loaded', async () => {
        const presenter = createPresenter();
        presenter.setColorMode('light');
        expect(tools.micromark.setColorMode).not.toHaveBeenCalled();

        tools.micromark.render.mockResolvedValue('');
        await presenter.render(REFERENCE, document.createElement('div'));
        presenter.setColorMode('dark');

        expect(presenter.colorModeId).toBe('dark');
        expect(tools.micromark.setColorMode).toHaveBeenCalledWith('dark');
        expect(tools.highcharts.setColorMode).toHaveBeenLastCalledWith('dark');
    });
});

describe('useSampleData', () => {
    it('gives a value for each month and measure, deriving starting and ending headcount', () => {
        const values = useSampleData().getMeasureValues(['openingHeadcount', 'startingHeadcount', 'endingHeadcount', 'unknown']);

        expect(values).toHaveLength(12);
        for (const [opening = 0, starting, ending, unknown] of values) {
            expect(starting).toBeGreaterThanOrEqual(opening);
            expect(ending).toBeGreaterThanOrEqual(0);
            expect(unknown).toBe(0);
        }
    });
});
