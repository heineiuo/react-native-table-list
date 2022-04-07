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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Image, Platform, Text, TouchableOpacity, View, } from 'react-native';
import { PlatformColor } from 'react-native-platform-color';
export function ImagePickerItem(props) {
    var _a;
    var uri = props.uri, style = props.style, onUpload = props.onUpload, fileName = props.fileName, type = props.type, upload = props.upload;
    var _b = useState(), error = _b[0], setError = _b[1];
    var _c = useState(props.remoteUri), remoteUri = _c[0], setRemoteUri = _c[1];
    var _d = useState(props.remoteUri ? 1 : 0), progress = _d[0], setProgress = _d[1];
    var previewUri = useState((_a = props.remoteUri) !== null && _a !== void 0 ? _a : props.uri)[0];
    useEffect(function () {
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
    return (_jsxs(TouchableOpacity, __assign({ onPress: function () {
            if (Platform.OS === 'web') {
                window.open(previewUri);
            }
        }, style: [
            {
                backgroundColor: PlatformColor('secondarySystemBackground'),
                borderRadius: 20,
                overflow: 'hidden',
            },
            style,
        ] }, { children: [_jsx(Image, { source: { uri: previewUri }, style: { width: '100%', height: '100%' } }), _jsx(View, __assign({ style: {
                    position: 'absolute',
                    backgroundColor: PlatformColor('darkText'),
                    bottom: 4,
                    left: 8,
                    right: 8,
                    height: 16,
                    alignItems: 'center',
                } }, { children: _jsx(Text, __assign({ style: { color: PlatformColor('lightText') } }, { children: progress })) }))] })));
}
//# sourceMappingURL=ImagePickerItem.js.map