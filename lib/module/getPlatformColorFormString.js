import { PlatformColor } from 'react-native-platform-color';
function getStringHashNumber(str) {
    var hash = 0;
    if (typeof str === 'string' && str.length > 0) {
        for (var i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
    }
    return hash;
}
var COLORFUL_PLATFORM_COLOR_LIST = [
    'systemBlue',
    'systemGreen',
    'systemIndigo',
    'systemOrange',
    'systemPink',
    'systemPurple',
    'systemRed',
    'systemTeal',
    'systemYellow',
];
var memorize = {};
export function getPlatformColorFromString(param) {
    if (memorize.text !== param) {
        memorize.text = param;
        var hash = getStringHashNumber(param);
        var index = Math.abs(hash) % (COLORFUL_PLATFORM_COLOR_LIST.length - 1);
        memorize.color = PlatformColor(COLORFUL_PLATFORM_COLOR_LIST[index]);
    }
    return memorize.color;
}
//# sourceMappingURL=getPlatformColorFormString.js.map