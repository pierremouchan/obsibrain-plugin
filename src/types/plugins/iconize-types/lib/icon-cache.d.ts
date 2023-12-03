interface CacheResult {
    iconNameWithPrefix: string;
    inCustomRule?: boolean;
    inInheritance?: boolean;
}
export declare class IconCache {
    private static instance;
    private cache;
    constructor();
    set: (path: string, result: CacheResult) => void;
    invalidate: (path: string) => void;
    clear: () => void;
    get: (path: string) => CacheResult | null;
    doesRecordExist: (path: string) => boolean;
    static getInstance: () => IconCache;
}
export {};
