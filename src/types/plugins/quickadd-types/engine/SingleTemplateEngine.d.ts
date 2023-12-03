import { TemplateEngine } from "./TemplateEngine";
import type { App } from "obsidian";
import type QuickAdd from "../main";
import type { IChoiceExecutor } from "../IChoiceExecutor";
export declare class SingleTemplateEngine extends TemplateEngine {
    private templatePath;
    constructor(app: App, plugin: QuickAdd, templatePath: string, choiceExecutor?: IChoiceExecutor);
    run(): Promise<string>;
}
