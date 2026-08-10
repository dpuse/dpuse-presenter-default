import { ComponentReferenceConfig } from '@dpuse/dpuse-shared/component';
import { LocalisedReference } from '@dpuse/dpuse-shared/locale';
import { ToolConfig } from '@dpuse/dpuse-shared/component/module/tool';
import { PresenterConfig, PresenterInterface, SanitizeHTML } from '@dpuse/dpuse-shared/component/module/presenter';
import { MicromarkTool } from '@dpuse/dpuse-tool-micromark-markdown-parser';
import { HighchartsTool } from '@dpuse/dpuse-tool-highcharts-visualiser';
export default class DefaultPresenter implements PresenterInterface {
    readonly config: PresenterConfig;
    colorModeId: string;
    readonly sampleData: {
        getMeasureValues: (ids: string[]) => number[][];
    };
    readonly sanitizeHTML: SanitizeHTML;
    readonly toolConfigs: ToolConfig[];
    highchartsTool?: HighchartsTool;
    micromarkTool?: MicromarkTool;
    constructor(toolConfigs: ToolConfig[], colorModeId: string, sanitizeHTML: SanitizeHTML);
    list(): ComponentReferenceConfig[];
    render(presentationReference: LocalisedReference<ComponentReferenceConfig>, renderTo: HTMLElement, data?: unknown): Promise<void>;
    setColorMode(id: string): void;
    private createVisualViewTab;
    private renderDefaultVisualView;
    private loadHighchartsTool;
    private loadMicromarkTool;
}
