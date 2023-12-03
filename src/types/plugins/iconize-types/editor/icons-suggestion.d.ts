import { App, Editor, EditorPosition, EditorSuggest, EditorSuggestContext, EditorSuggestTriggerInfo } from 'obsidian';
import IconFolderPlugin from '@app/main';
export default class SuggestionIcon extends EditorSuggest<string> {
    plugin: IconFolderPlugin;
    constructor(app: App, plugin: IconFolderPlugin);
    onTrigger(cursor: EditorPosition, editor: Editor): EditorSuggestTriggerInfo;
    getSuggestions(context: EditorSuggestContext): string[];
    renderSuggestion(value: string, el: HTMLElement): void;
    selectSuggestion(value: string): void;
}
