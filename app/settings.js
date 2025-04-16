import { Stack } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import AppBar from "../components/AppBar.js";
import { useTheme } from "react-native-paper";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar text="Info" showSettings={false} />
        <View style={{display:'flex',flex: 1,justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: theme.colors.onBackground,fontSize:30}}>ZAVED AHMAD</Text>
        </View>
    </View>
  );
}
