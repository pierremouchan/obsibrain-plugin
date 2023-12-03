import { EditorCommand } from "./EditorCommand";
import type { App } from "obsidian";
export declare class SelectActiveLineCommand extends EditorCommand {
    constructor();
    static run(app: App): void;
}
