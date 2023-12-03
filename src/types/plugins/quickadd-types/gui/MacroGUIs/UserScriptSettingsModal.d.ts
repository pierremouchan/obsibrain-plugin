import type { App } from "obsidian";
import { Modal } from "obsidian";
import type { IUserScript } from "../../types/macros/IUserScript";
type Option = {
    description?: string;
} & ({
    type: "text" | "input";
    value: string;
    placeholder?: string;
    secret?: boolean;
    defaultValue: string;
} | {
    type: "checkbox" | "toggle";
    value: boolean;
    defaultValue: boolean;
} | {
    type: "dropdown" | "select";
    value: string;
    options: string[];
    defaultValue: string;
} | {
    type: "format";
    value: string;
    placeholder?: string;
    defaultValue: string;
});
export declare class UserScriptSettingsModal extends Modal {
    private command;
    private settings;
    constructor(app: App, command: IUserScript, settings: {
        [key: string]: unknown;
        options?: {
            [key: string]: Option;
        };
    });
    protected display(): void;
    private addInputBox;
    private addToggle;
    private addDropdown;
    private addFormatInput;
}
export {};
