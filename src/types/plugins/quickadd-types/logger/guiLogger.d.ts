import { QuickAddLogger } from "./quickAddLogger";
import type QuickAdd from "../main";
export declare class GuiLogger extends QuickAddLogger {
    private plugin;
    constructor(plugin: QuickAdd);
    logError(msg: string): void;
    logWarning(msg: string): void;
    logMessage(msg: string): void;
}
