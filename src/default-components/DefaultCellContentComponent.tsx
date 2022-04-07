import { ReactNode } from "react";
import { Text, useColorScheme, View } from "react-native";
import { PlatformColor } from "react-native-platform-color";

import { useColors } from "../useColors";
import { TableListCellCustomComponentProps } from "../TableListTypes";

export function DefaultCellContentComponent(
  props: TableListCellCustomComponentProps<any, any>
): JSX.Element {
  const colors = useColors();
  const { item } = props;
  const { detail, title } = item;
  let detailElement: ReactNode = detail;
  useColorScheme();

  if (typeof detailElement === "string") {
    detailElement = (
      <Text
        style={{
          color: PlatformColor("label"),
        }}
      >
        {detail}
      </Text>
    );
  }

  return (
    <View
      style={{
        justifyContent: "space-between",
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Text style={{ color: colors.text }}>{title}</Text>
      <View
        style={{
          paddingLeft: 10,
          justifyContent: "space-between",
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            overflow: "hidden",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          {detailElement}
        </View>
      </View>
    </View>
  );
}
