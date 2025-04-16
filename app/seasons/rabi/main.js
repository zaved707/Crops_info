import { Stack } from "expo-router";
import { View, Text } from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
import BigButton from "../../../components/Button.js";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar text="Rabi" showSettings={false} />
      <View style={{ gap: 20, paddingTop: 20 }}>
        <BigButton
          text="Wheat"
          startIcon="leaf"
          href="/seasons/rabi/Wheat"
          height="60"
        />
        <BigButton
          text="Barley"
          startIcon="leaf"
          href="/seasons/rabi/Barley"
          height="60"
        />
        <BigButton
          text="Gram"
          startIcon="leaf"
          href="/seasons/rabi/Gram"
          height="60"
        />
        <BigButton
          text="Mustard"
          startIcon="leaf"
          href="/seasons/rabi/Mustard"
          height="60"
        />
      </View>
    </View>
  );
}
