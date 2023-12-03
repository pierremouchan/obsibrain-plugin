import { Modal } from "obsidian";
import type { IInfiniteAIAssistantCommand } from "src/types/macros/QuickCommands/IAIAssistantCommand";
export declare class InfiniteAIAssistantCommandSettingsModal extends Modal {
    waitForClose: Promise<IInfiniteAIAssistantCommand>;
    private resolvePromise;
    private rejectPromise;
    private settings;
    private showAdvancedSettings;
    private get systemPromptTokenLength();
    constructor(settings: IInfiniteAIAssistantCommand);
    private display;
    private reload;
    addModelSetting(container: HTMLElement): void;
    addOutputVariableNameSetting(container: HTMLElement): void;
    addSystemPromptSetting(contentEl: HTMLElement): void;
    addShowAdvancedSettingsToggle(container: HTMLElement): void;
    addTemperatureSetting(container: HTMLElement): void;
    addTopPSetting(container: HTMLElement): void;
    addFrequencyPenaltySetting(container: HTMLElement): void;
    addPresencePenaltySetting(container: HTMLElement): void;
    addResultJoinerSetting(container: HTMLElement): void;
    addChunkSeparatorSetting(container: HTMLElement): void;
    addMaxTokensSetting(container: HTMLElement): void;
    addMergeChunksSetting(container: HTMLElement): void;
    onClose(): void;
}
