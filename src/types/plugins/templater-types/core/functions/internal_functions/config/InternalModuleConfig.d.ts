import { InternalModule } from "../InternalModule";
import { RunningConfig } from "core/Templater";
import { ModuleName } from "editor/TpDocumentation";
export declare class InternalModuleConfig extends InternalModule {
    name: ModuleName;
    create_static_templates(): Promise<void>;
    create_dynamic_templates(): Promise<void>;
    teardown(): Promise<void>;
    generate_object(config: RunningConfig): Promise<Record<string, unknown>>;
}
