import type { App } from "obsidian";
import { Modal } from "obsidian";
export default class GenericCheckboxPrompt extends Modal {
    private items;
    readonly selectedItems: string[];
    private resolvePromise;
    private rejectPromise;
    promise: Promise<string[]>;
    private resolved;
    private _selectedItems;
    static Open(app: App, items: string[], selectedItems?: string[]): Promise<string[]>;
    constructor(app: App, items: string[], selectedItems?: string[]);
    private display;
    onClose(): void;
    private addCheckboxRows;
    private addCheckboxRow;
    private addSubmitButton;
}
