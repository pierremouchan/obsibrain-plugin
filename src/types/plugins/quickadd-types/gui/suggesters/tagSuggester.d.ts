import type { App } from "obsidian";
import { TextInputSuggest } from "./suggest";
export declare class SilentTagSuggester extends TextInputSuggest<string> {
    app: App;
    inputEl: HTMLInputElement | HTMLTextAreaElement;
    private lastInput;
    private tags;
    constructor(app: App, inputEl: HTMLInputElement | HTMLTextAreaElement);
    getSuggestions(inputStr: string): string[];
    renderSuggestion(item: string, el: HTMLElement): void;
    selectSuggestion(item: string): void;
    private getNewInputValueForTag;
}
