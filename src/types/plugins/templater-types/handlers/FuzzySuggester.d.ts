import { FuzzySuggestModal, TFile, TFolder } from "obsidian";
import TemplaterPlugin from "main";
export declare enum OpenMode {
    InsertTemplate = 0,
    CreateNoteTemplate = 1
}
export declare class FuzzySuggester extends FuzzySuggestModal<TFile> {
    private plugin;
    private open_mode;
    private creation_folder;
    constructor(plugin: TemplaterPlugin);
    getItems(): TFile[];
    getItemText(item: TFile): string;
    onChooseItem(item: TFile): void;
    start(): void;
    insert_template(): void;
    create_new_note_from_template(folder?: TFolder): void;
}
