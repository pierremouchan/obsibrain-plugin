import type { ILogger } from "./ilogger";
declare class LogManager {
    static loggers: ILogger[];
    register(logger: ILogger): LogManager;
    logError(message: string): void;
    logWarning(message: string): void;
    logMessage(message: string): void;
}
export declare const log: LogManager;
export {};
