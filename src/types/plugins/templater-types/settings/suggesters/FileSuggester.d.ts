import { TFile } from "obsidian";
import { TextInputSuggest } from "./suggest";
import TemplaterPlugin from "main";
export declare enum FileSuggestMode {
    TemplateFiles = 0,
    ScriptFiles = 1
}
export declare class FileSuggest extends TextInputSuggest<TFile> {
    inputEl: HTMLInputElement;
    private plugin;
    private mode;
    constructor(inputEl: HTMLInputElement, plugin: TemplaterPlugin, mode: FileSuggestMode);
    get_folder(mode: FileSuggestMode): string;
    get_error_msg(mode: FileSuggestMode): string;
    getSuggestions(input_str: string): TFile[];
    renderSuggestion(file: TFile, el: HTMLElement): void;
    selectSuggestion(file: TFile): void;
}
