import { Command } from "./Command";
import { CommandType } from "./CommandType";
import type { IUserScript } from "./IUserScript";
export declare class UserScript extends Command implements IUserScript {
    name: string;
    path: string;
    type: CommandType;
    settings: {
        [key: string]: unknown;
    };
    constructor(name: string, path: string);
}
