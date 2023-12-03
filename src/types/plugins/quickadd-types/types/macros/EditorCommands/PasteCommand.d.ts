import type { App } from "obsidian";
import { EditorCommand } from "./EditorCommand";
export declare class PasteCommand extends EditorCommand {
    constructor();
    static run(app: App): Promise<void>;
}
