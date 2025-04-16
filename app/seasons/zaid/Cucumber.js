import { Stack } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar text="Cucumber" showSettings={false} />
      <ScrollView style={{ }}>
        <Image
          style={{
            marginTop: "5%",
            borderRadius: 20,
            width: "100%",
            height: 300,
          }}
          source={require("../../..//assets/cucumber1.jpg")}
        />
        <View style={{ marginTop: 20 ,marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>
            Cucumber, a refreshing summer vegetable, is widely grown in North
            India during the Zaid season (March to June). It thrives in states
            like Uttar Pradesh, Punjab, and Haryana, where the warm climate and
            well-drained sandy loam soils provide ideal conditions. Cucumber is
            valued for its high water content and nutritional benefits, often
            consumed raw in salads or as a cooling snack. Farmers often use
            hybrid varieties and adopt practices like mulching and drip
            irrigation to conserve water and enhance yields. However, cucumber
            farming faces challenges such as pests like fruit flies and diseases
            like powdery mildew. Integrated pest management and timely fungicide
            application are common strategies to address these issues. Cucumber
            remains a significant crop in North India, contributing to the
            region’s agricultural diversity and providing a source of income for
            farmers.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
