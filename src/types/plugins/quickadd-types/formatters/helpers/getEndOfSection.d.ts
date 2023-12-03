/**
 *
 * @param lines Lines in body to find end of section
 * @param targetLine Target line to find end of section
 * @param shouldConsiderSubsections Whether to consider subsections as part of the section
 * @returns index of end of section
 */
export default function getEndOfSection(lines: string[], targetLine: number, shouldConsiderSubsections?: boolean): number;
