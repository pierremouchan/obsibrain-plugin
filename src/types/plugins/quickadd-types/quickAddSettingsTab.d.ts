import type { App } from "obsidian";
import { PluginSettingTab } from "obsidian";
import type QuickAdd from "./main";
import type IChoice from "./types/choices/IChoice";
import type { IMacro } from "./types/macros/IMacro";
import type { Models_And_Ask_Me } from "./ai/models";
export interface QuickAddSettings {
    choices: IChoice[];
    macros: IMacro[];
    inputPrompt: "multi-line" | "single-line";
    devMode: boolean;
    templateFolderPath: string;
    announceUpdates: boolean;
    version: string;
    /**
     * If this is true, then the plugin is not to contact external services (e.g. OpenAI, etc.) via plugin features.
     * Users _can_ still use User Scripts to do so by executing arbitrary JavaScript, but that is not something the plugin controls.
     */
    disableOnlineFeatures: boolean;
    ai: {
        OpenAIApiKey: string;
        defaultModel: Models_And_Ask_Me;
        defaultSystemPrompt: string;
        promptTemplatesFolderPath: string;
        showAssistant: boolean;
    };
    migrations: {
        migrateToMacroIDFromEmbeddedMacro: boolean;
        useQuickAddTemplateFolder: boolean;
        incrementFileNameSettingMoveToDefaultBehavior: boolean;
        mutualExclusionInsertAfterAndWriteToBottomOfFile: boolean;
        setVersionAfterUpdateModalRelease: boolean;
    };
}
export declare const DEFAULT_SETTINGS: QuickAddSettings;
export declare class QuickAddSettingsTab extends PluginSettingTab {
    plugin: QuickAdd;
    private choiceView;
    constructor(app: App, plugin: QuickAdd);
    display(): void;
    addAnnounceUpdatesSetting(): void;
    hide(): void;
    private addChoicesSetting;
    private addUseMultiLineInputPromptSetting;
    private addTemplateFolderPathSetting;
    private addDisableOnlineFeaturesSetting;
}
