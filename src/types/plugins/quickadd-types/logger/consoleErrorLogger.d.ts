import { QuickAddLogger } from "./quickAddLogger";
import type { QuickAddError } from "./quickAddError";
export declare class ConsoleErrorLogger extends QuickAddLogger {
    ErrorLog: QuickAddError[];
    logError(errorMsg: string): void;
    logWarning(warningMsg: string): void;
    logMessage(logMsg: string): void;
    private addMessageToErrorLog;
}
