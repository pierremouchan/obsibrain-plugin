import { ChoiceBuilder } from "./choiceBuilder";
import type IMacroChoice from "../../types/choices/IMacroChoice";
import type { App } from "obsidian";
import type { IMacro } from "../../types/macros/IMacro";
import type IChoice from "src/types/choices/IChoice";
export declare class MacroChoiceBuilder extends ChoiceBuilder {
    choice: IMacroChoice;
    private macros;
    private choices;
    private unsubscribe;
    constructor(app: App, choice: IMacroChoice, macros: IMacro[], choices: IChoice[]);
    onClose(): void;
    protected display(): void;
    addCreateMacroButton(container: HTMLElement): void;
    private addConfigureMacroButton;
    private addSelectMacroSearch;
    private selectMacro;
}
