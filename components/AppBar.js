import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { useTheme } from "react-native-paper";
export default function header(props) {
  const theme = useTheme();
  return (
    <View
      style={{
        height: "10%",
        width: "100%",
        backgroundColor: theme.colors.background,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        borderBottomWidth: 0.5,
        borderColor: theme.colors.outline
      }}
    >
      <Text
        style={{
          marginLeft: 20,
          fontSize: 30,
          color: theme.colors.onBackground,
        }}
      >
        {props.text}
      </Text>
    </View>
  );
}
