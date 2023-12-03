import type { App } from "obsidian";
import { Modal, TextComponent } from "obsidian";
export default class GenericInputPrompt extends Modal {
    private header;
    waitForClose: Promise<string>;
    private resolvePromise;
    private rejectPromise;
    private didSubmit;
    private inputComponent;
    private input;
    private readonly placeholder;
    private fileSuggester;
    private tagSuggester;
    static Prompt(app: App, header: string, placeholder?: string, value?: string): Promise<string>;
    protected constructor(app: App, header: string, placeholder?: string, value?: string);
    private display;
    protected createInputField(container: HTMLElement, placeholder?: string, value?: string): TextComponent;
    private createButton;
    private createButtonBar;
    private submitClickCallback;
    private cancelClickCallback;
    private submitEnterCallback;
    private submit;
    private cancel;
    private resolveInput;
    private removeInputListener;
    onOpen(): void;
    onClose(): void;
}
