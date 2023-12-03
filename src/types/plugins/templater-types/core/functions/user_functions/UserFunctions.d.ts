import TemplaterPlugin from "main";
import { RunningConfig } from "core/Templater";
import { IGenerateObject } from "../IGenerateObject";
export declare class UserFunctions implements IGenerateObject {
    private plugin;
    private user_system_functions;
    private user_script_functions;
    constructor(plugin: TemplaterPlugin);
    generate_object(config: RunningConfig): Promise<Record<string, unknown>>;
}
