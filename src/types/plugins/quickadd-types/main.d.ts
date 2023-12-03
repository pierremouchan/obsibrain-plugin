import type { TFile } from "obsidian";
import { Plugin } from "obsidian";
import type { QuickAddSettings } from "./quickAddSettingsTab";
import type IChoice from "./types/choices/IChoice";
import { QuickAddApi } from "./quickAddApi";
export default class QuickAdd extends Plugin {
    static instance: QuickAdd;
    settings: QuickAddSettings;
    private unsubscribeSettingsStore;
    get api(): ReturnType<typeof QuickAddApi.GetApi>;
    onload(): Promise<void>;
    onunload(): void;
    loadSettings(): Promise<void>;
    saveSettings(): Promise<void>;
    private addCommandsForChoices;
    addCommandForChoice(choice: IChoice): void;
    getChoiceById(choiceId: string): IChoice;
    getChoiceByName(choiceName: string): IChoice;
    private getChoice;
    removeCommandForChoice(choice: IChoice): void;
    getTemplateFiles(): TFile[];
    private announceUpdate;
}
