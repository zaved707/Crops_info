import { Stack } from "expo-router";
import { View, Text } from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
import BigButton from "../../../components/Button.js";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar text="Kharif" showSettings={false} />
      <View style={{ gap: 20, paddingTop: 20 }}>
        <BigButton
          text="Cotton"
          startIcon="leaf"
          href="/seasons/kharif/Cotton"
          height="60"
        />
        <BigButton
          text="Maize"
          startIcon="leaf"
          href="/seasons/kharif/Maize"
          height="60"
        />
        <BigButton
          text="Rice"
          startIcon="leaf"
          href="/seasons/kharif/Rice"
          height="60"
        />
        <BigButton
          text="Sugarcane"
          startIcon="leaf"
          href="/seasons/kharif/Sugarcane"
          height="60"
        />
      </View>
    </View>
  );
}
