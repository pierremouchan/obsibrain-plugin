import type { App } from "obsidian";
import { EditorCommand } from "./EditorCommand";
export declare class CopyCommand extends EditorCommand {
    constructor();
    static run(app: App): Promise<void>;
}
