import { InternalModule } from "../InternalModule";
import { ModuleName } from "editor/TpDocumentation";
export declare class InternalModuleFrontmatter extends InternalModule {
    name: ModuleName;
    create_static_templates(): Promise<void>;
    create_dynamic_templates(): Promise<void>;
    teardown(): Promise<void>;
}
