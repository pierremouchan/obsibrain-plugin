import { TemplaterError } from "utils/Error";
import { Modal } from "obsidian";
export declare class PromptModal extends Modal {
    private prompt_text;
    private default_value;
    private multi_line;
    private resolve;
    private reject;
    private submitted;
    private value;
    constructor(prompt_text: string, default_value: string, multi_line: boolean);
    onOpen(): void;
    onClose(): void;
    createForm(): void;
    private enterCallback;
    private resolveAndClose;
    openAndGetValue(resolve: (value: string) => void, reject: (reason?: TemplaterError) => void): Promise<void>;
}
