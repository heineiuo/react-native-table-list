declare const colorNames: readonly ["border", "background", "card", "notification", "primary", "text"];
declare type ColorNames = typeof colorNames[number];
declare const colorLevels: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
declare const grayColorLevels: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
declare type ColorLevel = typeof colorLevels[number];
declare type GrayColorLevel = typeof grayColorLevels[number];
declare type ColorNamesWithLevel = `${ColorNames}${ColorLevel}` | `gray${GrayColorLevel}` | `gray` | ColorNames;
declare type Colors = {
    [x in ColorNamesWithLevel]: string;
};
export declare function useColors(): Colors;
export {};
