/**
 * Default presenter class.
 */

// Dependencies - Framework.
// import { useDataTable } from '@dpuse/dpuse-shared';
import type { ComponentReference } from '@dpuse/dpuse-shared/component';
import type { ToolConfig } from '@dpuse/dpuse-shared/component/module/tool';
import type {
    PresentationCartesianTypeId,
    PresentationConfig,
    PresentationPolarTypeId,
    PresentationRangeTypeId,
    PresentationVisualCartesianChartViewConfig,
    PresentationVisualConfig,
    PresentationVisualPeriodFlowBoundariesChartViewConfig,
    PresentationVisualPolarChartViewConfig,
    PresentationVisualRangeChartViewConfig,
    PresentationVisualValueTableViewConfig
} from '@dpuse/dpuse-shared/component/presentation';
import type { PresenterConfig, PresenterInterface } from '@dpuse/dpuse-shared/component/module/presenter';

// Dependencies - Tools.
import type { MicromarkTool } from '@dpuse/dpuse-tool-micromark';
import type { HighchartsTool, HighchartsView } from '@dpuse/dpuse-tool-highcharts';

// Dependencies - Data.
import config from '~/config.json';
import configPresentations from '~/configPresentations.json';
import { useSampleData } from '@/composers/useSampleData';

// Classes - Default presenter.
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

    // Operations - List. TODO: Is this needed? Is 'configPresentations.json' needed????
    list(): ComponentReference[] {
        return this.config.presentations;
    }

    // Operations - Render.
    // eslint-disable-next-line sonarjs/cognitive-complexity
    async render(presentationPath: keyof typeof configPresentations, renderTo: HTMLElement, data?: unknown): Promise<void> {
        // Use presentation path to retrieve presentation.
        const presentation = configPresentations[presentationPath] as PresentationConfig;

        // Substitute values for label and description placeholders in content.
        let processedMarkdown = presentation.content;
        processedMarkdown = processedMarkdown.replaceAll('{{label}}', presentation.label.en ?? `{{label}}`);
        // .replaceAll('{{description}}', presentation.description.en ?? `{{description}}`); // TODO

        // Render markdown to HTML
        this.micromarkTool = await this.loadMicromarkTool();
        const html = await this.micromarkTool.render(processedMarkdown, { directives: true, tables: true }); // TODO: Need to pass tables from frontend.
        renderTo.innerHTML = html;
        this.micromarkTool.highlight(renderTo, this.colorModeId);

        // ????
        this.highchartsTool = await this.loadHighchartsTool();

        for (const visualElements of renderTo.querySelectorAll('.dpuse-highcharts')) {
            const datasetOptions = decodeURIComponent((visualElements as HTMLElement).dataset['options'] ?? '');
            const options = JSON.parse(datasetOptions);
            const viewContainerElement = document.createElement('div');
            visualElements.append(viewContainerElement);
            this.highchartsTool.render(options, viewContainerElement);
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
                let defaultCategoryId: string | undefined;
                let defaultTypeId: string | undefined;
                for (const viewConfig of visualConfig.views) {
                    const viewCategoryId = viewConfig.categoryId;
                    switch (viewCategoryId) {
                        case 'cartesianChart': {
                            const cartesianViewConfig = viewConfig as PresentationVisualCartesianChartViewConfig;
                            if (!defaultTypeId || cartesianViewConfig.default) {
                                defaultCategoryId = viewCategoryId;
                                defaultTypeId = cartesianViewConfig.typeId;
                            }
                            const element = document.createElement('div');
                            element.textContent = cartesianViewConfig.typeId;
                            element.addEventListener('click', () =>
                                this.highchartsTool?.renderCartesianChart(cartesianViewConfig.typeId, visualConfig.content, viewContainerElement)
                            );
                            tabBarElement.append(element);
                            break;
                        }
                        case 'periodFlowBoundariesChart': {
                            const periodFlowBoundariesViewConfig = viewConfig as PresentationVisualPeriodFlowBoundariesChartViewConfig;
                            if (!defaultTypeId || periodFlowBoundariesViewConfig.default) {
                                defaultCategoryId = viewCategoryId;
                                defaultTypeId = undefined;
                            }
                            const element = document.createElement('div');
                            element.textContent = viewCategoryId;
                            element.addEventListener('click', () => this.highchartsTool?.renderPeriodFlowBoundaries(visualConfig.content, viewContainerElement));
                            tabBarElement.append(element);
                            break;
                        }
                        case 'polarChart': {
                            const polarViewConfig = viewConfig as PresentationVisualPolarChartViewConfig;
                            if (!defaultTypeId || polarViewConfig.default) {
                                defaultCategoryId = viewCategoryId;
                                defaultTypeId = polarViewConfig.typeId;
                            }
                            const element = document.createElement('div');
                            element.textContent = polarViewConfig.typeId;
                            element.addEventListener('click', () => this.highchartsTool?.renderPolarChart(polarViewConfig.typeId, visualConfig.content, viewContainerElement));
                            tabBarElement.append(element);
                            break;
                        }
                        case 'rangeChart': {
                            const rangeViewConfig = viewConfig as PresentationVisualRangeChartViewConfig;
                            if (!defaultTypeId || rangeViewConfig.default) {
                                defaultCategoryId = viewCategoryId;
                                defaultTypeId = rangeViewConfig.typeId;
                            }
                            const element = document.createElement('div');
                            element.textContent = rangeViewConfig.typeId;
                            element.addEventListener('click', () => this.highchartsTool?.renderRangeChart(rangeViewConfig.typeId, visualConfig.content, viewContainerElement));
                            tabBarElement.append(element);
                            break;
                        }
                        // case 'valueTable': {
                        //     const valueTableViewConfig = viewConfig as PresentationVisualValueTableViewConfig;
                        //     if (!defaultTypeId || valueTableViewConfig.default) {
                        //         defaultCategoryId = viewCategoryId;
                        //         defaultTypeId = undefined;
                        //     }
                        //     const element = document.createElement('div');
                        //     element.textContent = viewCategoryId;
                        //     element.addEventListener('click', () => this.valueTable.render(visualConfig.content, viewContainerElement));
                        //     tabBarElement.appendChild(element);
                        //     break;
                        // }
                    }
                }
                visualElements.append(tabBarElement);
                visualElements.append(viewContainerElement);
                switch (defaultCategoryId) {
                    case 'cartesianChart':
                        this.highchartsTool.renderCartesianChart(defaultTypeId as PresentationCartesianTypeId, visualConfig.content, viewContainerElement);
                        break;
                    case 'periodFlowBoundariesChart':
                        await this.highchartsTool.renderPeriodFlowBoundaries(visualConfig.content, viewContainerElement);
                        break;
                    case 'polarChart':
                        await this.highchartsTool.renderPolarChart(defaultTypeId as PresentationPolarTypeId, visualConfig.content, viewContainerElement);
                        break;
                    case 'rangeChart':
                        await this.highchartsTool.renderRangeChart(defaultTypeId as PresentationRangeTypeId, visualConfig.content, viewContainerElement);
                        break;
                    // case 'valueTable':
                    //     this.valueTable.render(visualConfig.content, viewContainerElement);
                    //     break;
                }
            } catch (error) {
                console.error(error);
                visualElements.textContent = 'Invalid options.';
            }
        }
    }

    // Operations - Set color mode.
    setColorMode(id: string) {
        this.colorModeId = id;
        if (this.micromarkTool) this.micromarkTool.setColorMode(this.colorModeId);
    }

    // Helpers - Load Highcharts tool.
    private async loadHighchartsTool(): Promise<HighchartsTool> {
        if (this.highchartsTool) return this.highchartsTool;

        const toolModuleConfig = this.toolConfigs.find((config) => config.id === 'dpuse-tool-highcharts');
        if (!toolModuleConfig) throw new Error('No Highcharts tool module configuration.');

        const url = `https://engine-eu.dpuse.app/tools/highcharts_v${toolModuleConfig.version}/dpuse-tool-highcharts.es.js`;
        const module = (await import(/* @vite-ignore */ url)) as { HighchartsTool: new () => HighchartsTool };
        const HighchartsTool = module.HighchartsTool;
        return new HighchartsTool();
    }

    // Helpers - Load Micromark tool.
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
