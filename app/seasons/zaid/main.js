import { Stack } from "expo-router";
import { View, Text } from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
import BigButton from "../../../components/Button.js";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar text="Zaid" showSettings= {false}/>
      <View style={{ gap: 20 ,  paddingTop: 20}}>
      
        <BigButton
          text="Cucumber"
          startIcon="leaf"
          href="/seasons/zaid/Cucumber"
          height="60"
        />
        <BigButton
          text="Okra"
          startIcon="leaf"
          href="/seasons/zaid/Okra"
          height="60"
        />
        <BigButton
          text="Muskmelon"
          startIcon="leaf"
          href="/seasons/zaid/Muskmelon"
          height="60"
        />
        <BigButton
          text="Watermelon"
          startIcon="leaf"
          href="/seasons/zaid/Watermelon"
          height="60"
        />
      </View>
    </View>
  );
}
