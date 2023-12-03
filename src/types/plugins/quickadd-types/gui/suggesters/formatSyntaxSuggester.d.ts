import { TextInputSuggest } from "./suggest";
import type { App } from "obsidian";
import type QuickAdd from "../../main";
export declare class FormatSyntaxSuggester extends TextInputSuggest<string> {
    app: App;
    inputEl: HTMLInputElement | HTMLTextAreaElement;
    private plugin;
    private suggestForFileNames;
    private lastInput;
    private lastInputType;
    private readonly macroNames;
    private readonly templatePaths;
    constructor(app: App, inputEl: HTMLInputElement | HTMLTextAreaElement, plugin: QuickAdd, suggestForFileNames?: boolean);
    getSuggestions(inputStr: string): string[];
    selectSuggestion(item: string): void;
    renderSuggestion(value: string, el: HTMLElement): void;
    private processToken;
}
