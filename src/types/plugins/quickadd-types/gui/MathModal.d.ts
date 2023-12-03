import { Modal } from "obsidian";
export declare class MathModal extends Modal {
    waitForClose: Promise<string>;
    private resolvePromise;
    private rejectPromise;
    private inputEl;
    private didSubmit;
    private keybindListener;
    static Prompt(): Promise<string>;
    constructor();
    private display;
    onOpen(): Promise<void>;
    private mathjaxLoop;
    private cursorToGoTo;
    private createButton;
    private createButtonBar;
    private submitClickCallback;
    private cancelClickCallback;
    private removeInputListeners;
    private resolveInput;
    private submit;
    private cancel;
    onClose(): void;
}
