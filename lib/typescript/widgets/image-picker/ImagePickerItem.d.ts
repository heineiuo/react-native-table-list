/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
import { Asset } from 'react-native-image-picker';
export declare function ImagePickerItem(props: Asset & Pick<Required<Asset>, 'uri'> & {
    upload: any;
    remoteUri?: string;
    onUpload?: (asset: {
        remoteUri: string;
    }) => void;
    style?: StyleProp<ViewStyle>;
}): JSX.Element;
