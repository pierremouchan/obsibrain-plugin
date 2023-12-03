import { TemplaterError } from "utils/Error";
import { FuzzyMatch, FuzzySuggestModal } from "obsidian";
export declare class SuggesterModal<T> extends FuzzySuggestModal<T> {
    private text_items;
    private items;
    private resolve;
    private reject;
    private submitted;
    constructor(text_items: string[] | ((item: T) => string), items: T[], placeholder: string, limit?: number);
    getItems(): T[];
    onClose(): void;
    selectSuggestion(value: FuzzyMatch<T>, evt: MouseEvent | KeyboardEvent): void;
    getItemText(item: T): string;
    onChooseItem(item: T): void;
    openAndGetValue(resolve: (value: T) => void, reject: (reason?: TemplaterError) => void): Promise<void>;
}
