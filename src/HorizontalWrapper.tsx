import { ReactNode, useCallback, useState } from "react";
import { useWindowDimensions, View } from "react-native";

type FunctionChildren = (params: { width: number }) => JSX.Element;

export function HorizontalWrapper(props: {
  children?: ReactNode | FunctionChildren;
}): JSX.Element {
  const { width } = useWindowDimensions();
  const [childWidth, setChildWidth] = useState<null | number>(null);

  const onLayout = useCallback(
    (e) => {
      const { width } = e.nativeEvent.layout;
      if (width !== childWidth) {
        setChildWidth(width);
      }
    },
    [childWidth]
  );

  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: Math.min(640, width - 30),
        }}
        onLayout={onLayout}
      >
        {(() => {
          if (typeof props.children === "function") {
            if (childWidth === null) {
              return null;
            }

            return props.children({ width });
          }
          return props.children;
        })()}
      </View>
    </View>
  );
}
