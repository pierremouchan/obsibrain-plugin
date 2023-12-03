import { InternalModule } from "../InternalModule";
import { ModuleName } from "editor/TpDocumentation";
export declare class InternalModuleDate extends InternalModule {
    name: ModuleName;
    create_static_templates(): Promise<void>;
    create_dynamic_templates(): Promise<void>;
    teardown(): Promise<void>;
    generate_now(): (format?: string, offset?: number | string, reference?: string, reference_format?: string) => string;
    generate_tomorrow(): (format?: string) => string;
    generate_weekday(): (format: string, weekday: number, reference?: string, reference_format?: string) => string;
    generate_yesterday(): (format?: string) => string;
}
