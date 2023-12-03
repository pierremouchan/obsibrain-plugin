import { Editor, EditorPosition, EditorSuggest, EditorSuggestContext, EditorSuggestTriggerInfo, TFile } from "obsidian";
import { Settings } from "settings/Settings";
import { TpSuggestDocumentation } from "./TpDocumentation";
export declare class Autocomplete extends EditorSuggest<TpSuggestDocumentation> {
    private tp_keyword_regex;
    private documentation;
    private latest_trigger_info;
    private module_name;
    private function_trigger;
    private function_name;
    constructor(settings: Settings);
    onTrigger(cursor: EditorPosition, editor: Editor, _file: TFile): EditorSuggestTriggerInfo | null;
    getSuggestions(context: EditorSuggestContext): TpSuggestDocumentation[];
    renderSuggestion(value: TpSuggestDocumentation, el: HTMLElement): void;
    selectSuggestion(value: TpSuggestDocumentation, _evt: MouseEvent | KeyboardEvent): void;
}
