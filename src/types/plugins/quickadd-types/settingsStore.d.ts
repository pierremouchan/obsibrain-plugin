import type { QuickAddSettings } from "./quickAddSettingsTab";
import type { IMacro } from "./types/macros/IMacro";
import { QuickAddMacro } from "./types/macros/QuickAddMacro";
type SettingsState = QuickAddSettings & {
    setSettings: (settings: Partial<QuickAddSettings>) => void;
};
export declare const settingsStore: {
    getState: () => SettingsState;
    setState: (partial: SettingsState | Partial<SettingsState> | ((state: SettingsState) => SettingsState | Partial<SettingsState>), replace?: boolean | undefined) => void;
    subscribe: (listener: (state: SettingsState, prevState: SettingsState) => void) => () => void;
    setMacro: (macroId: IMacro["id"], macro: IMacro) => void;
    createMacro: (name: string) => QuickAddMacro;
    getMacro: (macroId: IMacro["id"]) => IMacro | undefined;
};
export {};
