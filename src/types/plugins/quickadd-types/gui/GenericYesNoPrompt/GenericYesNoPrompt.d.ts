import type { App } from "obsidian";
import { Modal } from "obsidian";
export default class GenericYesNoPrompt extends Modal {
    private header;
    private text?;
    private resolvePromise;
    private rejectPromise;
    private input;
    waitForClose: Promise<boolean>;
    private didSubmit;
    static Prompt(app: App, header: string, text?: string): Promise<boolean>;
    private constructor();
    private display;
    private submit;
    onClose(): void;
}
