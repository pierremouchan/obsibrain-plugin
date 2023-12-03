import TemplaterPlugin from "main";
import { RunningConfig } from "core/Templater";
import { IGenerateObject } from "core/functions/IGenerateObject";
import { ModuleName } from "editor/TpDocumentation";
export declare abstract class InternalModule implements IGenerateObject {
    protected plugin: TemplaterPlugin;
    abstract name: ModuleName;
    protected static_functions: Map<string, unknown>;
    protected dynamic_functions: Map<string, unknown>;
    protected config: RunningConfig;
    protected static_object: {
        [x: string]: unknown;
    };
    constructor(plugin: TemplaterPlugin);
    getName(): ModuleName;
    abstract create_static_templates(): Promise<void>;
    abstract create_dynamic_templates(): Promise<void>;
    abstract teardown(): Promise<void>;
    init(): Promise<void>;
    generate_object(new_config: RunningConfig): Promise<Record<string, unknown>>;
}
