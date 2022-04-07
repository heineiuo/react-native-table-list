"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useColors = void 0;
var colors_1 = require("@ant-design/colors");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var colorNames = [
    'border',
    'background',
    'card',
    'notification',
    'primary',
    'text',
];
var colorLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var grayColorLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var grayLight = [
    '#ffffff',
    '#fafafa',
    '#f5f5f5',
    '#f0f0f0',
    '#d9d9d9',
    '#bfbfbf',
    '#8c8c8c',
    '#595959',
    '#434343',
    '#262626',
    '#1f1f1f',
    '#141414',
    '#000',
];
var grayDark = [
    '#000',
    '#141414',
    '#1f1f1f',
    '#262626',
    '#434343',
    '#595959',
    '#8c8c8c',
    '#bfbfbf',
    '#d9d9d9',
    '#f0f0f0',
    '#f5f5f5',
    '#fafafa',
    '#ffffff',
];
function useColors() {
    var _a = (0, native_1.useTheme)(), colors = _a.colors, dark = _a.dark;
    return (0, react_1.useMemo)(function () {
        var result = {};
        var gray = dark ? grayDark : grayLight;
        for (var _i = 0, colorNames_1 = colorNames; _i < colorNames_1.length; _i++) {
            var colorName = colorNames_1[_i];
            result[colorName] = colors[colorName];
            var generated = (0, colors_1.generate)(colors[colorName]);
            for (var _a = 0, colorLevels_1 = colorLevels; _a < colorLevels_1.length; _a++) {
                var level = colorLevels_1[_a];
                var nameWithLevel = "".concat(colorName).concat(level);
                result[nameWithLevel] = generated[level];
            }
        }
        for (var _b = 0, grayColorLevels_1 = grayColorLevels; _b < grayColorLevels_1.length; _b++) {
            var level = grayColorLevels_1[_b];
            var nameWithLevel = "gray".concat(level);
            result[nameWithLevel] = gray[level];
        }
        return result;
    }, [colors, dark]);
}
exports.useColors = useColors;
//# sourceMappingURL=useColors.js.map