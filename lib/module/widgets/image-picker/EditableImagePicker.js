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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { MaterialIcons } from '@expo/vector-icons';
import { useCallback, useEffect, useState } from 'react';
import { Text, useColorScheme, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';
import { PlatformColor } from 'react-native-platform-color';
import { useEditableCell } from '../../editable/EditableContext';
import { ImagePickerItem } from './ImagePickerItem';
export function CellImagePickerComponent(props) {
    useColorScheme();
    var upload = props.upload, item = props.item;
    var _a = useEditableCell(), value = _a.value, readOnly = _a.readOnly, updateField = _a.updateField;
    var _b = useState(value || []), list = _b[0], setList = _b[1];
    var onUpload = useCallback(function (asset1, asset2) {
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
    var onPress = useCallback(function () {
        launchImageLibrary({ selectionLimit: 1, mediaType: 'photo' }, function (res) {
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
    useEffect(function () {
        var value = list.filter(function (item) { return !!item.remoteUri; });
        updateField({ value: value });
    }, [list]);
    return (_jsx(_Fragment, { children: _jsxs(View, __assign({ style: {
                flex: 1,
                alignItems: 'flex-start',
            } }, { children: [_jsx(View, { children: _jsx(Text, { children: item.title }) }), _jsxs(View, __assign({ style: {
                        paddingVertical: 10,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    } }, { children: [!readOnly && (_jsx(TouchableOpacity, __assign({ onPress: onPress, style: {
                                width: 80,
                                height: 80,
                                margin: 8,
                                borderRadius: 10,
                                borderWidth: 2,
                                borderStyle: 'dashed',
                                borderColor: PlatformColor('systemBlue'),
                                justifyContent: 'center',
                                alignItems: 'center',
                            } }, { children: _jsx(MaterialIcons, { name: "add", color: PlatformColor('systemBlue') }) }))), list.map(function (item) {
                            return (_jsx(ImagePickerItem, __assign({ upload: upload, onUpload: function (asset) { return onUpload(item, asset); }, style: {
                                    width: 80,
                                    height: 80,
                                    margin: 8,
                                } }, item), item.uri));
                        })] }))] })) }));
}
//# sourceMappingURL=EditableImagePicker.js.map