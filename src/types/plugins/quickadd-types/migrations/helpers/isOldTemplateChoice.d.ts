import type { TemplateChoice } from "src/types/choices/TemplateChoice";
export type OldTemplateChoice = TemplateChoice & {
    incrementFileName?: boolean;
};
export declare function isOldTemplateChoice(choice: unknown): choice is OldTemplateChoice;
