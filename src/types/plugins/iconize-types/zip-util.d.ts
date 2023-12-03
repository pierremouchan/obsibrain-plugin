import { JSZipObject } from 'jszip';
/**
 * Download a zip file from a url and return the bytes of the file as an ArrayBuffer.
 * @param url String url of the zip file to download.
 * @returns ArrayBuffer of the zip file.
 */
export declare const downloadZipFile: (url: string) => Promise<ArrayBuffer>;
/**
 * Transforms a JSZip file into a File object.
 * @param file JSZip file to transform.
 * @returns File object of the JSZip file.
 */
export declare const getFileFromJSZipFile: (file: JSZipObject) => Promise<File>;
/**
 * Read a zip file and return the files inside it.
 * @param bytes ArrayBuffer of the zip file.
 * @param extraPath String path to filter the files inside the zip file. This can be used
 * to set an extra path (like a directory inside the zip file) to filter the files.
 * @returns Array of loaded files inside the zip file.
 */
export declare const readZipFile: (bytes: ArrayBuffer, extraPath?: string) => Promise<JSZipObject[]>;
