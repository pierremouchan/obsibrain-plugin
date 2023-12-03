import { TextInputSuggest } from "./suggest";
import type { App } from "obsidian";
export declare class ExclusiveSuggester extends TextInputSuggest<string> {
    app: App;
    inputEl: HTMLInputElement | HTMLTextAreaElement;
    private suggestItems;
    private currentItems;
    constructor(app: App, inputEl: HTMLInputElement | HTMLTextAreaElement, suggestItems: string[], currentItems: string[]);
    updateCurrentItems(currentItems: string[]): void;
    getSuggestions(inputStr: string): string[];
    selectSuggestion(item: string): void;
    renderSuggestion(value: string, el: HTMLElement): void;
}
