import type { EditorCommandType } from "./EditorCommandType";
import { Command } from "../Command";
import type { IEditorCommand } from "./IEditorCommand";
import type { App } from "obsidian";
import { MarkdownView } from "obsidian";
export declare abstract class EditorCommand extends Command implements IEditorCommand {
    editorCommandType: EditorCommandType;
    protected constructor(type: EditorCommandType);
    static getSelectedText(app: App): string;
    static getActiveMarkdownView(app: App): MarkdownView;
}
