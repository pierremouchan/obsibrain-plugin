import type { CommandType } from "./CommandType";
import type { ICommand } from "./ICommand";
export declare abstract class Command implements ICommand {
    name: string;
    type: CommandType;
    id: string;
    protected constructor(name: string, type: CommandType);
}
