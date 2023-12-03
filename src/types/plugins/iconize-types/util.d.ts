import { FileItem, FileWithLeaf } from './@types/obsidian';
import IconFolderPlugin from './main';
export declare const DEFAULT_FILE_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"svg-icon lucide-file\"><path d=\"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline></svg>";
export declare const DEFAULT_FOLDER_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"svg-icon lucide-folder\"><path d=\"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z\"></path></svg>";
/**
 * Tries to read the file synchronously.
 * @param file File that will be read.
 * @returns A promise that will resolve to a string which is the content of the file.
 */
export declare const readFileSync: (file: File) => Promise<string>;
/**
 * Gets all the currently opened files by getting the markdown leaves and then checking
 * for the `file` property in the view. This also returns the leaf of the file.
 * @param plugin Instance of the IconFolderPlugin.
 * @returns An array of {@link FileWithLeaf} objects.
 */
export declare const getAllOpenedFiles: (plugin: IconFolderPlugin) => FileWithLeaf[];
/**
 * Gets the file item title element by either accessing `titleEl` or `selfEl`.
 * @param fileItem FileItem which will be used to retrieve the title element from.
 * @returns HTMLElement which is the title element.
 */
export declare const getFileItemTitleEl: (fileItem: FileItem) => HTMLElement;
/**
 * Gets the file item inner title element by either accessing `titleInnerEl` or `innerEl`.
 * @param fileItem FileItem which will be used to retrieve the inner title element from.
 * @returns HTMLElement which is the inner title element.
 */
export declare const getFileItemInnerTitleEl: (fileItem: FileItem) => HTMLElement;
/**
 * A utility function which will add the icon to the icon pack and then extract the icon
 * to the icon pack.
 * @param plugin IconFolderPlugin that will be used for extracting the icon.
 * @param iconNameWithPrefix String that will be used to add the icon to the icon pack.
 */
export declare const saveIconToIconPack: (plugin: IconFolderPlugin, iconNameWithPrefix: string) => void;
/**
 * A utility function which will remove the icon from the icon pack by removing the icon
 * file from the icon pack directory.
 * @param plugin IconFolderPlugin that will be used for removing the icon.
 * @param iconNameWithPrefix String that will be used to remove the icon from the icon pack.
 */
export declare const removeIconFromIconPack: (plugin: IconFolderPlugin, iconNameWithPrefix: string) => void;
