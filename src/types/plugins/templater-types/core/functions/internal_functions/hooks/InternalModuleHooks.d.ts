import { ModuleName } from "editor/TpDocumentation";
import { InternalModule } from "../InternalModule";
export declare class InternalModuleHooks extends InternalModule {
    name: ModuleName;
    private event_refs;
    create_static_templates(): Promise<void>;
    create_dynamic_templates(): Promise<void>;
    teardown(): Promise<void>;
    generate_on_all_templates_executed(): (callback_function: () => unknown) => void;
}
