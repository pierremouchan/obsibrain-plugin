import { TFolder } from "obsidian";
import { TextInputSuggest } from "./suggest";
export declare class FolderSuggest extends TextInputSuggest<TFolder> {
    getSuggestions(inputStr: string): TFolder[];
    renderSuggestion(file: TFolder, el: HTMLElement): void;
    selectSuggestion(file: TFolder): void;
}
