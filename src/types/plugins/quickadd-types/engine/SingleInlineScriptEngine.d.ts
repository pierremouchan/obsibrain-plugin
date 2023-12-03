import type { App } from "obsidian";
import type QuickAdd from "../main";
import type { IChoiceExecutor } from "../IChoiceExecutor";
import { MacroChoiceEngine } from "./MacroChoiceEngine";
export declare class SingleInlineScriptEngine extends MacroChoiceEngine {
    constructor(app: App, plugin: QuickAdd, choiceExecutor: IChoiceExecutor, variables: Map<string, string>);
    runAndGetOutput(code: string): Promise<any>;
}
