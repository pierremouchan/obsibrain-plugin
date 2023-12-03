import TemplaterPlugin from "main";
import { IGenerateObject } from "../IGenerateObject";
import { RunningConfig } from "core/Templater";
export declare class UserSystemFunctions implements IGenerateObject {
    private plugin;
    private cwd;
    private exec_promise;
    constructor(plugin: TemplaterPlugin);
    generate_system_functions(config: RunningConfig): Promise<Map<string, (user_args?: Record<string, unknown>) => Promise<string>>>;
    generate_object(config: RunningConfig): Promise<Record<string, unknown>>;
}
