import TemplaterPlugin from "main";
import { IGenerateObject } from "core/functions/IGenerateObject";
import { RunningConfig } from "core/Templater";
export declare class InternalFunctions implements IGenerateObject {
    protected plugin: TemplaterPlugin;
    private modules_array;
    constructor(plugin: TemplaterPlugin);
    init(): Promise<void>;
    teardown(): Promise<void>;
    generate_object(config: RunningConfig): Promise<Record<string, unknown>>;
}
