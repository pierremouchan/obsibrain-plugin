import { Modal } from "obsidian";
import type { QuickAddSettings } from "src/quickAddSettingsTab";
type AIAssistantSettings = QuickAddSettings["ai"];
export declare class AIAssistantSettingsModal extends Modal {
    waitForClose: Promise<AIAssistantSettings>;
    private resolvePromise;
    private rejectPromise;
    private settings;
    constructor(settings: AIAssistantSettings);
    private display;
    private reload;
    addApiKeySetting(container: HTMLElement): void;
    addDefaultModelSetting(container: HTMLElement): void;
    addPromptTemplateFolderPathSetting(container: HTMLElement): void;
    addShowAssistantSetting(container: HTMLElement): void;
    addDefaultSystemPromptSetting(contentEl: HTMLElement): void;
    onClose(): void;
}
export {};
