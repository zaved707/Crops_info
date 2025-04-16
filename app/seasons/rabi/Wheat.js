import { Stack } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar text="Wheat" showSettings={false} />
      <ScrollView style={{  }}>
        <Image
          style={{
            marginTop: "5%",
            borderRadius: 20,
            width: "100%",
            height: 300,
          }}
          source={require("../../..//assets/wheat1.jpg")}
        />
        <View style={{ marginTop: 20 ,marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>
            Wheat, a staple Rabi crop, is extensively cultivated in North India
            from November to April. It thrives in states like Punjab, Haryana,
            Uttar Pradesh, and Madhya Pradesh, where the cool climate and
            fertile alluvial soils provide ideal conditions. Wheat is a major
            source of carbohydrates and forms the basis of staple foods like
            chapati and bread. Farmers often use high- yielding varieties and
            adopt practices like crop rotation and balanced fertilization to
            enhance productivity. However, wheat farming faces challenges such
            as rust diseases and pests like aphids. Integrated pest management
            and timely irrigation are common strategies to address these issues.
            Wheat remains a cornerstone of North Indian agriculture,
            contributing significantly to food security and the rural economy.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
