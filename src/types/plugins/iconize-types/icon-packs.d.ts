export interface IconPack {
    name: string;
    displayName: string;
    path: string;
    downloadLink: string;
}
declare const iconPacks: {
    [key: string]: IconPack;
};
/**
 * Returns a possible path to the icon pack.
 * @param name String of the icon pack name.
 * @returns String of the path to the icon pack or undefined if the icon pack does not
 * exist.
 */
export declare const getExtraPath: (iconPackName: string) => string | undefined;
export default iconPacks;
