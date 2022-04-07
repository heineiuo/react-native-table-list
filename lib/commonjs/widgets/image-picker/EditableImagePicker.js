"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellImagePickerComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_image_picker_1 = require("react-native-image-picker");
var react_native_platform_color_1 = require("react-native-platform-color");
var EditableContext_1 = require("../../editable/EditableContext");
var ImagePickerItem_1 = require("./ImagePickerItem");
function CellImagePickerComponent(props) {
    (0, react_native_1.useColorScheme)();
    var upload = props.upload, item = props.item;
    var _a = (0, EditableContext_1.useEditableCell)(), value = _a.value, readOnly = _a.readOnly, updateField = _a.updateField;
    var _b = (0, react_1.useState)(value || []), list = _b[0], setList = _b[1];
    var onUpload = (0, react_1.useCallback)(function (asset1, asset2) {
        var remoteUri = asset2.remoteUri;
        setList(function (prev) {
            return prev.map(function (item) {
                if (item.uri === asset1.uri) {
                    return __assign(__assign({}, item), { remoteUri: remoteUri });
                }
                return item;
            });
        });
    }, []);
    var onPress = (0, react_1.useCallback)(function () {
        (0, react_native_image_picker_1.launchImageLibrary)({ selectionLimit: 1, mediaType: 'photo' }, function (res) {
            console.log('res', res);
            var assets = res.assets;
            if (res.didCancel) {
                return;
            }
            if (res.errorCode) {
                return;
            }
            if (assets) {
                var assets2_1 = assets.map(function (item) {
                    return __assign({}, item);
                });
                setList(function (prev) {
                    return __spreadArray(__spreadArray([], prev, true), assets2_1, true);
                });
            }
        });
    }, []);
    (0, react_1.useEffect)(function () {
        var value = list.filter(function (item) { return !!item.remoteUri; });
        updateField({ value: value });
    }, [list]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: {
                flex: 1,
                alignItems: 'flex-start',
            } }, { children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { children: item.title }) }), (0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: {
                        paddingVertical: 10,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    } }, { children: [!readOnly && ((0, jsx_runtime_1.jsx)(react_native_gesture_handler_1.TouchableOpacity, __assign({ onPress: onPress, style: {
                                width: 80,
                                height: 80,
                                margin: 8,
                                borderRadius: 10,
                                borderWidth: 2,
                                borderStyle: 'dashed',
                                borderColor: (0, react_native_platform_color_1.PlatformColor)('systemBlue'),
                                justifyContent: 'center',
                                alignItems: 'center',
                            } }, { children: (0, jsx_runtime_1.jsx)(vector_icons_1.MaterialIcons, { name: "add", color: (0, react_native_platform_color_1.PlatformColor)('systemBlue') }) }))), list.map(function (item) {
                            return ((0, jsx_runtime_1.jsx)(ImagePickerItem_1.ImagePickerItem, __assign({ upload: upload, onUpload: function (asset) { return onUpload(item, asset); }, style: {
                                    width: 80,
                                    height: 80,
                                    margin: 8,
                                } }, item), item.uri));
                        })] }))] })) }));
}
exports.CellImagePickerComponent = CellImagePickerComponent;
//# sourceMappingURL=EditableImagePicker.js.map