import { Modal } from "obsidian";
import type { IAIAssistantCommand } from "src/types/macros/QuickCommands/IAIAssistantCommand";
export declare class AIAssistantCommandSettingsModal extends Modal {
    waitForClose: Promise<IAIAssistantCommand>;
    private resolvePromise;
    private rejectPromise;
    private settings;
    private showAdvancedSettings;
    private get systemPromptTokenLength();
    constructor(settings: IAIAssistantCommand);
    private display;
    private reload;
    addPromptTemplateSetting(container: HTMLElement): void;
    addModelSetting(container: HTMLElement): void;
    addOutputVariableNameSetting(container: HTMLElement): void;
    addSystemPromptSetting(contentEl: HTMLElement): void;
    addShowAdvancedSettingsToggle(container: HTMLElement): void;
    addTemperatureSetting(container: HTMLElement): void;
    addTopPSetting(container: HTMLElement): void;
    addFrequencyPenaltySetting(container: HTMLElement): void;
    addPresencePenaltySetting(container: HTMLElement): void;
    onClose(): void;
}
