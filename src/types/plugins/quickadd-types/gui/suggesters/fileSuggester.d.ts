import { TextInputSuggest } from "./suggest";
import type { App } from "obsidian";
export declare class SilentFileSuggester extends TextInputSuggest<string> {
    app: App;
    inputEl: HTMLInputElement | HTMLTextAreaElement;
    private lastInput;
    private fileNames;
    private fileMap;
    constructor(app: App, inputEl: HTMLInputElement | HTMLTextAreaElement);
    getSuggestions(inputStr: string): string[];
    renderSuggestion(item: string, el: HTMLElement): void;
    selectSuggestion(item: string): void;
    private makeLinkObsidianMethod;
    private makeLinkManually;
    private getNewInputValueForFileLink;
    private getNewInputValueForFileName;
    private getUnresolvedLinkNames;
}
