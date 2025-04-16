import { Stack } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar text="Mustard" showSettings={false} />
      <ScrollView style={{}}>
        <Image
          style={{
            marginTop: "5%",
            borderRadius: 20,
            width: "100%",
            height: 300,
          }}
          source={require("../../..//assets/mustard1.jpg")}
        />
        <View style={{ marginTop: 20 ,marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>
            Mustard, a vital oilseed crop, is extensively cultivated in North
            India during the Rabi season (October to March). Known for its
            adaptability to cool climates, mustard thrives in states like
            Rajasthan, Haryana, Punjab, and Uttar Pradesh. The crop is cherished
            for its seeds, which yield mustard oil, a staple in Indian kitchens,
            and its leaves, consumed as a nutritious green vegetable. Mustard
            farming in North India is characterized by its resilience to drought
            and its ability to grow in a variety of soil types, from sandy loam
            to clayey soils. Farmers often use traditional methods alongside
            modern techniques, such as improved seed varieties and balanced
            fertilization, to enhance yields. However, challenges like aphid
            infestations and diseases such as white rust can impact production.
            To combat these, integrated pest management practices and timely
            irrigation are employed. Mustard remains a cornerstone of North
            Indian agriculture, contributing significantly to the region’s
            economy and dietary habits.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
