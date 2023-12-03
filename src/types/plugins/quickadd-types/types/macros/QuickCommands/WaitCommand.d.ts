import { Command } from "../Command";
import { CommandType } from "../CommandType";
import type { IWaitCommand } from "./IWaitCommand";
export declare class WaitCommand extends Command implements IWaitCommand {
    id: string;
    name: string;
    time: number;
    type: CommandType;
    constructor(time: number);
}
