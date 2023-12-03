import { EditorPosition } from "obsidian";
export declare class CursorJumper {
    constructor();
    jump_to_next_cursor_location(): Promise<void>;
    get_editor_position_from_index(content: string, index: number): EditorPosition;
    replace_and_get_cursor_positions(content: string): {
        new_content?: string;
        positions?: EditorPosition[];
    };
    set_cursor_location(positions: EditorPosition[]): void;
}
