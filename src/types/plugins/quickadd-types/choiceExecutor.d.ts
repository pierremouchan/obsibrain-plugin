import type { App } from "obsidian";
import type QuickAdd from "./main";
import type IChoice from "./types/choices/IChoice";
import type { IChoiceExecutor } from "./IChoiceExecutor";
export declare class ChoiceExecutor implements IChoiceExecutor {
    private app;
    private plugin;
    variables: Map<string, unknown>;
    constructor(app: App, plugin: QuickAdd);
    execute(choice: IChoice): Promise<void>;
    private onChooseTemplateType;
    private onChooseCaptureType;
    private onChooseMacroType;
    private onChooseMultiType;
}
