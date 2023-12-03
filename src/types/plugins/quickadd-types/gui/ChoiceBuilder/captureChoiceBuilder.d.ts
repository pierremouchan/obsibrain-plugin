import { ChoiceBuilder } from "./choiceBuilder";
import type ICaptureChoice from "../../types/choices/ICaptureChoice";
import type { App } from "obsidian";
import type QuickAdd from "../../main";
export declare class CaptureChoiceBuilder extends ChoiceBuilder {
    private plugin;
    choice: ICaptureChoice;
    constructor(app: App, choice: ICaptureChoice, plugin: QuickAdd);
    protected display(): void;
    private addCapturedToSetting;
    private addPrependSetting;
    private addTaskSetting;
    private addAppendLinkSetting;
    private addInsertAfterSetting;
    private addFormatSetting;
    private addCreateIfNotExistsSetting;
    private addCreateWithTemplateSetting;
    private addOpenFileSetting;
    private addOpenFileInNewTabSetting;
}
