import type { App } from "obsidian";
import type { IMacro } from "../types/macros/IMacro";
import { MacroChoiceEngine } from "./MacroChoiceEngine";
import type QuickAdd from "../main";
import type { IChoiceExecutor } from "../IChoiceExecutor";
export declare class StartupMacroEngine extends MacroChoiceEngine {
    constructor(app: App, plugin: QuickAdd, macros: IMacro[], choiceExecutor: IChoiceExecutor);
    run(): Promise<void>;
}
