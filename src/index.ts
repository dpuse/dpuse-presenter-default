// ── External Dependencies & Registrations
// import { useDataTable } from '@dpuse/dpuse-shared';
import type { ComponentReference } from '@dpuse/dpuse-shared/component';
import type { ToolConfig } from '@dpuse/dpuse-shared/component/module/tool';
import type {
    PresentationCartesianTypeId,
    PresentationCategoryId,
    PresentationConfig,
    PresentationPolarTypeId,
    PresentationRangeTypeId,
    PresentationVisualCartesianChartViewConfig,
    PresentationVisualConfig,
    PresentationVisualPeriodFlowBoundariesChartViewConfig,
    PresentationVisualPolarChartViewConfig,
    PresentationVisualRangeChartViewConfig,
    PresentationVisualViewConfig
    // PresentationVisualValueTableViewConfig
} from '@dpuse/dpuse-shared/component/presentation';
import type { PresenterConfig, PresenterInterface } from '@dpuse/dpuse-shared/component/module/presenter';

// ── DPUse Tools
import type { MicromarkTool } from '@dpuse/dpuse-tool-micromark';
import type { HighchartsOptions, HighchartsTool } from '@dpuse/dpuse-tool-highcharts';

// ── Data
import config from '~/config.json';
import configPresentations from '~/configPresentations.json';
import { useSampleData } from '@/composers/useSampleData';

// ── Presenters ───────────────────────────────────────────────────────────────────────────────────────────────────────

export default class DefaultPresenter implements PresenterInterface {
    readonly config: PresenterConfig; // TODO: If we remove list method, then config is not needed. Would make presenter slightly smaller.
    colorModeId: string;
    // readonly valueTable;
    readonly sampleData;
    readonly toolConfigs;

    highchartsTool?: HighchartsTool;
    micromarkTool?: MicromarkTool;

    constructor(toolConfigs: ToolConfig[], colorModeId: string) {
        this.config = config as PresenterConfig;
        this.toolConfigs = toolConfigs;
        this.colorModeId = colorModeId;

        // this.valueTable = useDataTable(); // TODO?
        this.sampleData = useSampleData(); // TODO?
    }

    // ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────

    // Operations - List. TODO: Is this needed? Is 'configPresentations.json' needed????
    list(): ComponentReference[] {
        return this.config.presentations;
    }

    // eslint-disable-next-line sonarjs/cognitive-complexity
    async render(presentationPath: keyof typeof configPresentations, renderTo: HTMLElement, data?: unknown): Promise<void> {
        // Use presentation path to retrieve presentation.
        const presentation = configPresentations[presentationPath] as PresentationConfig;

        // Substitute values for label and description placeholders in content.
        let processedMarkdown = presentation.content;
        processedMarkdown = processedMarkdown.replaceAll('{{label}}', () => presentation.label.en ?? `{{label}}`);
        // .replaceAll('{{description}}', presentation.description.en ?? `{{description}}`); // TODO

        // Render markdown to HTML
        this.micromarkTool = await this.loadMicromarkTool();
        const html = await this.micromarkTool.render(processedMarkdown, { directives: true, tables: true }); // TODO: Need to pass tables from frontend.
        renderTo.innerHTML = html;
        // colorModeId is passed explicitly (rather than relying on the tool's own state) because micromarkTool is
        // lazily created above: any setColorMode() call received before this instance existed never reached it, so
        // its internal state could still be the 'light' default even if this.colorModeId is 'dark'.
        await this.micromarkTool.highlight(renderTo, this.colorModeId);

        // ????
        this.highchartsTool = await this.loadHighchartsTool();
        // colorModeId is passed explicitly for the same reason as micromarkTool.highlight() above: highchartsTool
        // is lazily created here, so any setColorMode() call received before this instance existed never reached it.
        this.highchartsTool.setColorMode(this.colorModeId);

        for (const visualElements of renderTo.querySelectorAll('.dpuse-highcharts')) {
            const datasetOptions = decodeURIComponent((visualElements as HTMLElement).dataset['options'] ?? '');
            const options = JSON.parse(datasetOptions) as HighchartsOptions;
            const viewContainerElement = document.createElement('div');
            visualElements.append(viewContainerElement);
            await this.highchartsTool.render(options, viewContainerElement);
        }

        for (const visualElements of renderTo.querySelectorAll('.dpuse-visual')) {
            const datasetOptions = decodeURIComponent((visualElements as HTMLElement).dataset['options'] ?? '');
            try {
                const visualConfig = JSON.parse(datasetOptions) as PresentationVisualConfig;

                if (!data) {
                    for (const measure of visualConfig.content.data.measures) {
                        measure.values = this.sampleData.getMeasureValues([measure.id]);
                    }
                }

                const tabBarElement = document.createElement('div');
                tabBarElement.className = 'dp-tab-bar';
                const viewContainerElement = document.createElement('div');
                let defaultCategoryId: PresentationCategoryId | undefined;
                let defaultTypeId: string | undefined;
                for (const viewConfig of visualConfig.views) {
                    const viewTab = this.createVisualViewTab(viewConfig, visualConfig, viewContainerElement);
                    if (viewTab) {
                        if (!defaultTypeId || viewTab.isDefault) {
                            defaultCategoryId = viewTab.categoryId;
                            defaultTypeId = viewTab.typeId;
                        }
                        tabBarElement.append(viewTab.element);
                    }
                }
                visualElements.append(tabBarElement);
                visualElements.append(viewContainerElement);
                await this.renderDefaultVisualView(defaultCategoryId, defaultTypeId, visualConfig, viewContainerElement);
            } catch (error) {
                console.error(error);
                visualElements.textContent = 'Invalid options.';
            }
        }
    }

    setColorMode(id: string) {
        this.colorModeId = id;
        // Guarded because micromarkTool may not be loaded yet (it's created lazily in render()); if it isn't, there
        // are no highlighted code blocks to update yet, and the next render() will pick up this.colorModeId anyway.
        if (this.micromarkTool) this.micromarkTool.setColorMode(this.colorModeId);
    }

    // ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────

    private createVisualViewTab(
        viewConfig: PresentationVisualViewConfig,
        visualConfig: PresentationVisualConfig,
        viewContainerElement: HTMLElement
    ): { element: HTMLElement; categoryId: PresentationCategoryId; typeId?: string; isDefault: boolean | undefined } | undefined {
        const viewCategoryId = viewConfig.categoryId;
        const element = document.createElement('div');

        switch (viewCategoryId) {
            case 'cartesianChart': {
                const cartesianViewConfig = viewConfig as PresentationVisualCartesianChartViewConfig;
                element.textContent = cartesianViewConfig.typeId;
                element.addEventListener('click', () => this.highchartsTool?.renderCartesianChart(cartesianViewConfig.typeId, visualConfig.content, viewContainerElement));
                return { element, categoryId: viewCategoryId, typeId: cartesianViewConfig.typeId, isDefault: cartesianViewConfig.default };
            }
            case 'periodFlowBoundariesChart': {
                const periodFlowBoundariesViewConfig = viewConfig as PresentationVisualPeriodFlowBoundariesChartViewConfig;
                element.textContent = viewCategoryId;
                element.addEventListener('click', () => {
                    void this.highchartsTool?.renderPeriodFlowBoundaries(visualConfig.content, viewContainerElement);
                });
                return { element, categoryId: viewCategoryId, isDefault: periodFlowBoundariesViewConfig.default };
            }
            case 'polarChart': {
                const polarViewConfig = viewConfig as PresentationVisualPolarChartViewConfig;
                element.textContent = polarViewConfig.typeId;
                element.addEventListener('click', () => {
                    void this.highchartsTool?.renderPolarChart(polarViewConfig.typeId, visualConfig.content, viewContainerElement);
                });
                return { element, categoryId: viewCategoryId, typeId: polarViewConfig.typeId, isDefault: polarViewConfig.default };
            }
            case 'rangeChart': {
                const rangeViewConfig = viewConfig as PresentationVisualRangeChartViewConfig;
                element.textContent = rangeViewConfig.typeId;
                element.addEventListener('click', () => {
                    void this.highchartsTool?.renderRangeChart(rangeViewConfig.typeId, visualConfig.content, viewContainerElement);
                });
                return { element, categoryId: viewCategoryId, typeId: rangeViewConfig.typeId, isDefault: rangeViewConfig.default };
            }
            // case 'valueTable': {
            //     const valueTableViewConfig = viewConfig as PresentationVisualValueTableViewConfig;
            //     element.textContent = viewCategoryId;
            //     element.addEventListener('click', () => this.valueTable.render(visualConfig.content, viewContainerElement));
            //     return { element, categoryId: viewCategoryId, isDefault: valueTableViewConfig.default };
            // }
            default:
                return undefined;
        }
    }

    private async renderDefaultVisualView(
        categoryId: PresentationCategoryId | undefined,
        typeId: string | undefined,
        visualConfig: PresentationVisualConfig,
        viewContainerElement: HTMLElement
    ): Promise<void> {
        if (!this.highchartsTool) return;

        switch (categoryId) {
            case 'cartesianChart':
                this.highchartsTool.renderCartesianChart(typeId as PresentationCartesianTypeId, visualConfig.content, viewContainerElement);
                break;
            case 'periodFlowBoundariesChart':
                await this.highchartsTool.renderPeriodFlowBoundaries(visualConfig.content, viewContainerElement);
                break;
            case 'polarChart':
                await this.highchartsTool.renderPolarChart(typeId as PresentationPolarTypeId, visualConfig.content, viewContainerElement);
                break;
            case 'rangeChart':
                await this.highchartsTool.renderRangeChart(typeId as PresentationRangeTypeId, visualConfig.content, viewContainerElement);
                break;
            // case 'valueTable':
            //     this.valueTable.render(visualConfig.content, viewContainerElement);
            //     break;
        }
    }

    private async loadHighchartsTool(): Promise<HighchartsTool> {
        if (this.highchartsTool) return this.highchartsTool;

        const toolModuleConfig = this.toolConfigs.find((config) => config.id === 'dpuse-tool-highcharts');
        if (!toolModuleConfig) throw new Error('No Highcharts tool module configuration.');

        const url = `https://engine-eu.dpuse.app/tools/highcharts_v${toolModuleConfig.version}/dpuse-tool-highcharts.es.js`;
        const module = (await import(/* @vite-ignore */ url)) as { HighchartsTool: new () => HighchartsTool };
        const HighchartsTool = module.HighchartsTool;
        return new HighchartsTool();
    }

    private async loadMicromarkTool(): Promise<MicromarkTool> {
        if (this.micromarkTool) return this.micromarkTool;

        const toolModuleConfig = this.toolConfigs.find((config) => config.id === 'dpuse-tool-micromark');
        if (!toolModuleConfig) throw new Error('No Micromark tool module configuration.');

        const url = `https://engine-eu.dpuse.app/tools/micromark_v${toolModuleConfig.version}/dpuse-tool-micromark.es.js`;
        const module = (await import(/* @vite-ignore */ url)) as { MicromarkTool: new () => MicromarkTool };
        const MicromarkToolConstructor = module.MicromarkTool;
        return new MicromarkToolConstructor();
    }
}
