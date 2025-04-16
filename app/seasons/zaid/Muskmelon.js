import { Stack } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar text="Muskmelon" showSettings={false} />
      <ScrollView style={{}}>
        <Image
          style={{
            marginTop: "5%",
            borderRadius: 20,
            width: "100%",
            height: 300,
          }}
          source={require("../../..//assets/muskmelon1.webp")}
        />
        <View style={{ marginTop: 20 ,marginHorizontal: 20}}>
          <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>
            Muskmelon, a cherished summer fruit, is widely grown in North India
            during the Zaid season (March to June). Known for its sweet aroma
            and juicy flesh, muskmelon thrives in states like Uttar Pradesh,
            Punjab, and Haryana. The crop prefers warm climates and sandy loam
            soils with good drainage. Farmers often adopt hybrid varieties to
            improve yield and fruit quality. Muskmelon farming involves
            techniques like mulching and drip irrigation to conserve water and
            maintain soil moisture. However, challenges such as pests like
            aphids and diseases like downy mildew can impact production.
            Integrated pest management and timely fungicide application are
            common practices to mitigate these issues. Muskmelon continues to be
            a vital crop in North India, offering nutritional benefits and
            economic opportunities for farmers.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
