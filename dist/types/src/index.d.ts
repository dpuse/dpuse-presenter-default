import { ComponentReference } from '@dpuse/dpuse-shared/component';
import { LocalisedReference } from '@dpuse/dpuse-shared/locale';
import { ToolConfig } from '@dpuse/dpuse-shared/component/module/tool';
import { PresenterConfig, PresenterInterface } from '@dpuse/dpuse-shared/component/module/presenter';
import { MicromarkTool } from '@dpuse/dpuse-tool-micromark';
import { HighchartsTool } from '@dpuse/dpuse-tool-highcharts';
export default class DefaultPresenter implements PresenterInterface {
    readonly config: PresenterConfig;
    colorModeId: string;
    readonly sampleData: {
        getMeasureValues: (ids: string[]) => number[][];
    };
    readonly toolConfigs: ToolConfig[];
    highchartsTool?: HighchartsTool;
    micromarkTool?: MicromarkTool;
    constructor(toolConfigs: ToolConfig[], colorModeId: string);
    list(): ComponentReference[];
    render(presentationReference: LocalisedReference<ComponentReference>, renderTo: HTMLElement, data?: unknown): Promise<void>;
    setColorMode(id: string): void;
    private createVisualViewTab;
    private renderDefaultVisualView;
    private loadHighchartsTool;
    private loadMicromarkTool;
}
