import type { IMacro } from "./types/macros/IMacro";
import type { App } from "obsidian";
import { Modal } from "obsidian";
import type IChoice from "./types/choices/IChoice";
import type QuickAdd from "./main";
export declare class MacrosManager extends Modal {
    app: App;
    private macros;
    private choices;
    waitForClose: Promise<IMacro[]>;
    private resolvePromise;
    private rejectPromise;
    private updateMacroContainer;
    private unsubscribe;
    private macroContainer;
    private plugin;
    constructor(app: App, plugin: QuickAdd, macros: IMacro[], choices: IChoice[]);
    private display;
    private addMacroSettings;
    private addMacroSetting;
    private addMacroConfigurationItem;
    private addSpanWithText;
    private updateMacro;
    private reload;
    private addAddMacroBar;
    onClose(): void;
}
