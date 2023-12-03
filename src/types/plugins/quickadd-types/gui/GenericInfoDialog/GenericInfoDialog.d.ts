import type { App } from "obsidian";
import { Modal } from "obsidian";
export default class GenericInfoDialog extends Modal {
    private header;
    private text;
    private resolvePromise;
    waitForClose: Promise<void>;
    static Show(app: App, header: string, text: string[] | string): Promise<void>;
    private constructor();
    private display;
    onClose(): void;
}
