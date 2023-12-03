import type { App } from "obsidian";
import type { IMacro } from "../types/macros/IMacro";
import { MacroChoiceEngine } from "./MacroChoiceEngine";
import type QuickAdd from "../main";
import type { IChoiceExecutor } from "../IChoiceExecutor";
export declare class SingleMacroEngine extends MacroChoiceEngine {
    private memberAccess;
    constructor(app: App, plugin: QuickAdd, macros: IMacro[], choiceExecutor: IChoiceExecutor, variables: Map<string, unknown>);
    runAndGetOutput(macroName: string): Promise<string>;
    protected onExportIsObject(obj: any): Promise<void>;
}
