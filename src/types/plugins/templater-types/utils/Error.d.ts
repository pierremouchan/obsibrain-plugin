export declare class TemplaterError extends Error {
    console_msg?: string | undefined;
    constructor(msg: string, console_msg?: string | undefined);
}
export declare function errorWrapper<T>(fn: () => Promise<T>, msg: string): Promise<T>;
export declare function errorWrapperSync<T>(fn: () => T, msg: string): T;
