import type IMacroChoice from "../types/choices/IMacroChoice";
import type { App } from "obsidian";
import * as obsidian from "obsidian";
import type { IUserScript } from "../types/macros/IUserScript";
import type { IObsidianCommand } from "../types/macros/IObsidianCommand";
import { QuickAddApi } from "../quickAddApi";
import type { ICommand } from "../types/macros/ICommand";
import { QuickAddChoiceEngine } from "./QuickAddChoiceEngine";
import type { IMacro } from "../types/macros/IMacro";
import type { IChoiceCommand } from "../types/macros/IChoiceCommand";
import QuickAdd from "../main";
import type { IChoiceExecutor } from "../IChoiceExecutor";
export declare class MacroChoiceEngine extends QuickAddChoiceEngine {
    choice: IMacroChoice;
    params: {
        app: App;
        quickAddApi: QuickAddApi;
        variables: Record<string, unknown>;
        obsidian: typeof obsidian;
    };
    protected output: unknown;
    protected macros: IMacro[];
    protected choiceExecutor: IChoiceExecutor;
    protected readonly plugin: QuickAdd;
    private userScriptCommand;
    constructor(app: App, plugin: QuickAdd, choice: IMacroChoice, macros: IMacro[], choiceExecutor: IChoiceExecutor, variables: Map<string, unknown>);
    run(): Promise<void>;
    protected executeCommands(commands: ICommand[]): Promise<void>;
    protected executeUserScript(command: IUserScript): Promise<void>;
    private runScriptWithSettings;
    protected userScriptDelegator(userScript: any): Promise<void>;
    private onExportIsFunction;
    protected onExportIsObject(obj: Record<string, unknown>): Promise<void>;
    protected executeObsidianCommand(command: IObsidianCommand): void;
    protected executeChoice(command: IChoiceCommand): Promise<void>;
    private executeNestedChoice;
    private executeEditorCommand;
    private executeAIAssistant;
}
