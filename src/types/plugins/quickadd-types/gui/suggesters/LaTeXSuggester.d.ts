import { TextInputSuggest } from "./suggest";
export declare class LaTeXSuggester extends TextInputSuggest<string> {
    inputEl: HTMLInputElement | HTMLTextAreaElement;
    private lastInput;
    private symbols;
    private elementsRendered;
    constructor(inputEl: HTMLInputElement | HTMLTextAreaElement);
    getSuggestions(inputStr: string): string[];
    renderSuggestion(item: string, el: HTMLElement): void;
    selectSuggestion(item: string): void;
}
