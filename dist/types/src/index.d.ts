import { ComponentReference } from '@dpuse/dpuse-shared/component';
import { ToolConfig } from '@dpuse/dpuse-shared/component/tool';
import { Presenter, PresenterConfig } from '@dpuse/dpuse-shared';
import { MicromarkTool } from '@datapos/datapos-tool-micromark';
import { HighchartsTool } from '@datapos/datapos-tool-highcharts';
import { default as configPresentations } from '../configPresentations.json';
export default class DefaultPresenter implements Presenter {
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
    render(presentationPath: keyof typeof configPresentations, renderTo: HTMLElement, data?: unknown): Promise<void>;
    setColorMode(id: string): void;
    private loadHighchartsTool;
    private loadMicromarkTool;
}
