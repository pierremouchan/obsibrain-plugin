import { InternalFunctions } from "./internal_functions/InternalFunctions";
import { UserFunctions } from "./user_functions/UserFunctions";
import TemplaterPlugin from "main";
import { IGenerateObject } from "./IGenerateObject";
import { RunningConfig } from "core/Templater";
export declare enum FunctionsMode {
    INTERNAL = 0,
    USER_INTERNAL = 1
}
export declare class FunctionsGenerator implements IGenerateObject {
    private plugin;
    internal_functions: InternalFunctions;
    user_functions: UserFunctions;
    constructor(plugin: TemplaterPlugin);
    init(): Promise<void>;
    teardown(): Promise<void>;
    additional_functions(): Record<string, unknown>;
    generate_object(config: RunningConfig, functions_mode?: FunctionsMode): Promise<Record<string, unknown>>;
}
