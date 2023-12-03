import type { ICommand } from "./ICommand";
import type { IMacro } from "./IMacro";
export declare class QuickAddMacro implements IMacro {
    id: string;
    name: string;
    commands: ICommand[];
    runOnStartup: boolean;
    constructor(name: string);
}
