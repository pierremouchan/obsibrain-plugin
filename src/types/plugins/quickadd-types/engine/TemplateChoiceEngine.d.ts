import type ITemplateChoice from "../types/choices/ITemplateChoice";
import type { App } from "obsidian";
import type QuickAdd from "../main";
import { TemplateEngine } from "./TemplateEngine";
import type { IChoiceExecutor } from "../IChoiceExecutor";
export declare class TemplateChoiceEngine extends TemplateEngine {
    choice: ITemplateChoice;
    constructor(app: App, plugin: QuickAdd, choice: ITemplateChoice, choiceExecutor: IChoiceExecutor);
    run(): Promise<void>;
    private formatFolderPaths;
    private getFolderPath;
}
