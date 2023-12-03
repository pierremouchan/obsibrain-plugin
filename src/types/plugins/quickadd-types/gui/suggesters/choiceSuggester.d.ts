import type { FuzzyMatch } from "obsidian";
import { FuzzySuggestModal } from "obsidian";
import type IChoice from "../../types/choices/IChoice";
import type QuickAdd from "../../main";
import type { IChoiceExecutor } from "../../IChoiceExecutor";
export default class ChoiceSuggester extends FuzzySuggestModal<IChoice> {
    private plugin;
    private choices;
    private choiceExecutor;
    static Open(plugin: QuickAdd, choices: IChoice[], choiceExecutor?: IChoiceExecutor): void;
    constructor(plugin: QuickAdd, choices: IChoice[], choiceExecutor?: IChoiceExecutor);
    renderSuggestion(item: FuzzyMatch<IChoice>, el: HTMLElement): void;
    getItemText(item: IChoice): string;
    getItems(): IChoice[];
    onChooseItem(item: IChoice, evt: MouseEvent | KeyboardEvent): Promise<void>;
    private onChooseMultiType;
}
