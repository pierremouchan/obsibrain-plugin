import { FuzzySuggestModal } from "obsidian";
import type { FuzzyMatch, App } from "obsidian";
type Options = {
    limit: FuzzySuggestModal<string>["limit"];
    emptyStateText: FuzzySuggestModal<string>["emptyStateText"];
    placeholder: Parameters<FuzzySuggestModal<string>["setPlaceholder"]>[0] extends string ? string : never;
};
/**
 * Similar to GenericSuggester, except users can write their own input, and it gets added to the list of suggestions.
 */
export default class InputSuggester extends FuzzySuggestModal<string> {
    private displayItems;
    private items;
    private resolvePromise;
    private rejectPromise;
    promise: Promise<string>;
    private resolved;
    static Suggest(app: App, displayItems: string[], items: string[], options?: Partial<Options>): Promise<string>;
    constructor(app: App, displayItems: string[], items: string[], options?: Partial<Options>);
    getItemText(item: string): string;
    getItems(): string[];
    selectSuggestion(value: FuzzyMatch<string>, evt: MouseEvent | KeyboardEvent): void;
    onChooseItem(item: string, evt: MouseEvent | KeyboardEvent): void;
    onClose(): void;
}
export {};
