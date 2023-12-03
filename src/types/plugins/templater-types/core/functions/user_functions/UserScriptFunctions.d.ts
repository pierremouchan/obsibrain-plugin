import { TFile } from "obsidian";
import TemplaterPlugin from "main";
import { IGenerateObject } from "../IGenerateObject";
export declare class UserScriptFunctions implements IGenerateObject {
    private plugin;
    constructor(plugin: TemplaterPlugin);
    generate_user_script_functions(): Promise<Map<string, () => unknown>>;
    load_user_script_function(file: TFile, user_script_functions: Map<string, () => unknown>): Promise<void>;
    generate_object(): Promise<Record<string, unknown>>;
}
