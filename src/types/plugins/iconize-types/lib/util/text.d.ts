declare const calculateFontTextSize: () => number;
declare const calculateInlineTitleSize: () => number;
export type Header = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
declare const isHeader: (value: string) => boolean;
declare const calculateHeaderSize: (header: Header) => number;
export { calculateInlineTitleSize, calculateHeaderSize, calculateFontTextSize, isHeader, };
