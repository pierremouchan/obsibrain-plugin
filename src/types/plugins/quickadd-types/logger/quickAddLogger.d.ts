import type { ILogger } from "./ilogger";
import type { ErrorLevel } from "./errorLevel";
import type { QuickAddError } from "./quickAddError";
export declare abstract class QuickAddLogger implements ILogger {
    abstract logError(msg: string): void;
    abstract logMessage(msg: string): void;
    abstract logWarning(msg: string): void;
    protected formatOutputString(error: QuickAddError): string;
    protected getQuickAddError(message: string, level: ErrorLevel): QuickAddError;
}
