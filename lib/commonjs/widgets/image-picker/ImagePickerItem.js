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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagePickerItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_platform_color_1 = require("react-native-platform-color");
function ImagePickerItem(props) {
    var _a;
    var uri = props.uri, style = props.style, onUpload = props.onUpload, fileName = props.fileName, type = props.type, upload = props.upload;
    var _b = (0, react_1.useState)(), error = _b[0], setError = _b[1];
    var _c = (0, react_1.useState)(props.remoteUri), remoteUri = _c[0], setRemoteUri = _c[1];
    var _d = (0, react_1.useState)(props.remoteUri ? 1 : 0), progress = _d[0], setProgress = _d[1];
    var previewUri = (0, react_1.useState)((_a = props.remoteUri) !== null && _a !== void 0 ? _a : props.uri)[0];
    (0, react_1.useEffect)(function () {
        if (remoteUri) {
            return;
        }
        var uploadTarget = upload(uri, {
        // ownerType: 'app',
        // ownerId: appId,
        // filename: fileName,
        });
        var remove1 = uploadTarget.addListener('progress', function (event) {
            setProgress(event.loaded / event.total);
        });
        var remove2 = uploadTarget.addListener('success', function (event) {
            var remoteUri = event.result.url;
            setProgress(1);
            setRemoteUri(remoteUri);
            if (onUpload) {
                onUpload({ remoteUri: remoteUri });
            }
        });
        var remove3 = uploadTarget.addListener('error', function (event) {
            setProgress(1);
            setError(event.result);
        });
        return function () {
            remove1();
            remove2();
            remove3();
        };
    }, [uri, remoteUri, fileName, upload, onUpload]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, __assign({ onPress: function () {
            if (react_native_1.Platform.OS === 'web') {
                window.open(previewUri);
            }
        }, style: [
            {
                backgroundColor: (0, react_native_platform_color_1.PlatformColor)('secondarySystemBackground'),
                borderRadius: 20,
                overflow: 'hidden',
            },
            style,
        ] }, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Image, { source: { uri: previewUri }, style: { width: '100%', height: '100%' } }), (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
                    position: 'absolute',
                    backgroundColor: (0, react_native_platform_color_1.PlatformColor)('darkText'),
                    bottom: 4,
                    left: 8,
                    right: 8,
                    height: 16,
                    alignItems: 'center',
                } }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: { color: (0, react_native_platform_color_1.PlatformColor)('lightText') } }, { children: progress })) }))] })));
}
exports.ImagePickerItem = ImagePickerItem;
//# sourceMappingURL=ImagePickerItem.js.map