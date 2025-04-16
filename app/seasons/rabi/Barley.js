import { Stack } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar text="Barley" showSettings={false} />
      <ScrollView style={{  }}>
        <Image
          style={{
            marginTop: "5%",
            borderRadius: 20,
            width: "100%",
            height: 300,
          }}
          source={require("../../../assets/barley1.jpg")}
        />
        <View style={{ marginTop: 20 ,marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>
            Barley, a versatile cereal crop, is widely grown in North India
            during the Rabi season (October to March). It thrives in states
            like Rajasthan, Uttar Pradesh, Haryana, and Punjab, where the cool
            climate and well-drained soils provide ideal conditions. Barley is
            valued for its use in food products, animal feed, and brewing
            industries. The crop is hardy and drought-tolerant, making it
            suitable for marginal lands and rainfed farming. Farmers often
            adopt improved seed varieties and balanced fertilization to enhance
            yields. Despite its resilience, barley cultivation faces challenges
            such as rust diseases and aphid infestations. Integrated pest
            management and timely sowing are common strategies to address these
            issues. Barley remains an important crop in North Indian
            agriculture, contributing to food security and the rural economy.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
