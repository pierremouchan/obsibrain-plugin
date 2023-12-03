import { Choice } from "./Choice";
import type IMacroChoice from "./IMacroChoice";
import type { IMacro } from "../macros/IMacro";
export declare class MacroChoice extends Choice implements IMacroChoice {
    macro?: IMacro;
    macroId: string;
    constructor(name: string);
}
