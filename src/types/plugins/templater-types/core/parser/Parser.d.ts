export declare class Parser {
    private renderer;
    init(): Promise<void>;
    parse_commands(content: string, context: Record<string, unknown>): Promise<string>;
}
