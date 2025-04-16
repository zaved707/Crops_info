import { Stack } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar text="Watermelon" showSettings={false} />
      <ScrollView style={{  }}>
        <Image
          style={{
            marginTop: "5%",
            borderRadius: 20,
            width: "100%",
            height: 300,
          }}
          source={require("../../../assets/watermelon1.jpg")}
        />
        <View style={{ marginTop: 20,marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>
            Watermelon, a popular summer fruit, is extensively cultivated in
            North India during the Zaid season (March to June). Known for its
            refreshing taste and high water content, watermelon thrives in
            states like Uttar Pradesh, Punjab, and Haryana. The crop requires
            warm temperatures and sandy loam soils with good drainage for
            optimal growth. Farmers often use hybrid varieties to enhance yield
            and fruit quality. Watermelon farming involves practices like
            mulching and drip irrigation to conserve water and maintain soil
            moisture. However, challenges such as pests like fruit flies and
            diseases like powdery mildew can affect production. Integrated pest
            management and timely application of fungicides are common
            strategies to address these issues. Watermelon remains a significant
            crop in North India, contributing to the region’s agricultural
            diversity and providing a source of income for farmers.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
