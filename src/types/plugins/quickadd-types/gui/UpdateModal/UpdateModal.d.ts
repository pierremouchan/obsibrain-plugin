import { Modal } from "obsidian";
type Release = {
    tag_name: string;
    body: string;
    draft: boolean;
    prerelease: boolean;
};
export declare class UpdateModal extends Modal {
    releases: Release[];
    private releaseNotesPromise;
    private previousVersion;
    constructor(previousQAVersion: string);
    onOpen(): void;
    onClose(): void;
    private display;
}
export {};
