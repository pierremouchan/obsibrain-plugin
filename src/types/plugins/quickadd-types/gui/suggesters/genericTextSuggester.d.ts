import { TextInputSuggest } from "./suggest";
import type { App } from "obsidian";
export declare class GenericTextSuggester extends TextInputSuggest<string> {
    app: App;
    inputEl: HTMLInputElement | HTMLTextAreaElement;
    private items;
    private maxSuggestions;
    constructor(app: App, inputEl: HTMLInputElement | HTMLTextAreaElement, items: string[], maxSuggestions?: number);
    getSuggestions(inputStr: string): string[];
    selectSuggestion(item: string): void;
    renderSuggestion(value: string, el: HTMLElement): void;
}
