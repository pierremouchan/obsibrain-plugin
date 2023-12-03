import { FuzzySuggestModal } from "obsidian";
import type { FuzzyMatch, App } from "obsidian";
export default class GenericSuggester<T> extends FuzzySuggestModal<T> {
    private displayItems;
    private items;
    private resolvePromise;
    private rejectPromise;
    promise: Promise<T>;
    private resolved;
    static Suggest<T>(app: App, displayItems: string[], items: T[]): Promise<T>;
    constructor(app: App, displayItems: string[], items: T[]);
    getItemText(item: T): string;
    getItems(): T[];
    selectSuggestion(value: FuzzyMatch<T>, evt: MouseEvent | KeyboardEvent): void;
    onChooseItem(item: T, evt: MouseEvent | KeyboardEvent): void;
    onClose(): void;
}
