import { InternalModule } from "../InternalModule";
import { ModuleName } from "editor/TpDocumentation";
export declare class InternalModuleSystem extends InternalModule {
    name: ModuleName;
    create_static_templates(): Promise<void>;
    create_dynamic_templates(): Promise<void>;
    teardown(): Promise<void>;
    generate_clipboard(): () => Promise<string | null>;
    generate_prompt(): (prompt_text: string, default_value: string, throw_on_cancel: boolean, multi_line: boolean) => Promise<string | null>;
    generate_suggester(): <T>(text_items: string[] | ((item: T) => string), items: T[], throw_on_cancel: boolean, placeholder: string, limit?: number) => Promise<T>;
}
