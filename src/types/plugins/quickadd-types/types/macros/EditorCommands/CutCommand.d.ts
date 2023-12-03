import type { App } from "obsidian";
import { EditorCommand } from "./EditorCommand";
export declare class CutCommand extends EditorCommand {
    constructor();
    static run(app: App): Promise<void>;
}
