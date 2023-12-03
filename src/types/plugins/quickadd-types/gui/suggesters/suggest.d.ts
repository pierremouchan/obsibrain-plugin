import type { ISuggestOwner, App } from "obsidian";
export declare abstract class TextInputSuggest<T> implements ISuggestOwner<T> {
    protected app: App;
    protected inputEl: HTMLInputElement | HTMLTextAreaElement;
    private popper;
    private scope;
    private suggestEl;
    private suggest;
    constructor(app: App, inputEl: HTMLInputElement | HTMLTextAreaElement);
    onInputChanged(): void;
    open(container: HTMLElement, inputEl: HTMLElement): void;
    close(): void;
    abstract getSuggestions(inputStr: string): T[];
    abstract renderSuggestion(item: T, el: HTMLElement): void;
    abstract selectSuggestion(item: T): void;
}
