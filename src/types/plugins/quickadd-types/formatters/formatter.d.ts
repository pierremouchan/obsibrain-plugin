export declare abstract class Formatter {
    protected value: string;
    protected variables: Map<string, unknown>;
    protected abstract format(input: string): Promise<string>;
    protected replacer(str: string, reg: RegExp, replaceValue: string): string;
    protected replaceDateInString(input: string): string;
    protected replaceTimeInString(input: string): string;
    protected abstract promptForValue(header?: string): Promise<string> | string;
    protected replaceValueInString(input: string): Promise<string>;
    protected replaceSelectedInString(input: string): Promise<string>;
    protected replaceLinkToCurrentFileInString(input: string): Promise<string>;
    protected abstract getCurrentFileLink(): string | null;
    protected replaceVariableInString(input: string): Promise<string>;
    protected replaceFieldVarInString(input: string): Promise<string>;
    protected abstract promptForMathValue(): Promise<string>;
    protected replaceMathValueInString(input: string): Promise<string>;
    protected replaceMacrosInString(input: string): Promise<string>;
    protected abstract getVariableValue(variableName: string): string;
    protected abstract suggestForValue(suggestedValues: string[]): Promise<string> | string;
    protected abstract suggestForField(variableName: string): any;
    protected replaceDateVariableInString(input: string): Promise<string>;
    protected replaceTemplateInString(input: string): Promise<string>;
    protected replaceLinebreakInString(input: string): string;
    protected abstract getNaturalLanguageDates(): any;
    protected abstract getMacroValue(macroName: string): Promise<string> | string;
    protected abstract promptForVariable(variableName: string): Promise<string>;
    protected abstract getTemplateContent(templatePath: string): Promise<string>;
    protected abstract getSelectedText(): Promise<string>;
}
