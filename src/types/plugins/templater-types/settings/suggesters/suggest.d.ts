import { ISuggestOwner } from "obsidian";
export declare abstract class TextInputSuggest<T> implements ISuggestOwner<T> {
    protected inputEl: HTMLInputElement | HTMLTextAreaElement;
    private popper;
    private scope;
    private suggestEl;
    private suggest;
    constructor(inputEl: HTMLInputElement | HTMLTextAreaElement);
    onInputChanged(): void;
    open(container: HTMLElement, inputEl: HTMLElement): void;
    close(): void;
    abstract getSuggestions(inputStr: string): T[];
    abstract renderSuggestion(item: T, el: HTMLElement): void;
    abstract selectSuggestion(item: T): void;
}
