import { ChoiceBuilder } from "./choiceBuilder";
import type { App } from "obsidian";
import type ITemplateChoice from "../../types/choices/ITemplateChoice";
import type QuickAdd from "../../main";
export declare class TemplateChoiceBuilder extends ChoiceBuilder {
    private plugin;
    choice: ITemplateChoice;
    constructor(app: App, choice: ITemplateChoice, plugin: QuickAdd);
    protected display(): void;
    private addTemplatePathSetting;
    private addFileNameFormatSetting;
    private addFolderSetting;
    private addFolderSelector;
    private addAppendLinkSetting;
    private addFileAlreadyExistsSetting;
    private addOpenFileSetting;
    private addOpenFileInNewTabSetting;
}
