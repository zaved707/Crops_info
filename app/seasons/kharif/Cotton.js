import { Stack } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background  }}>
      <AppBar text="Cotton" showSettings={false} />
      <ScrollView style={{}}>
        <Image
          style={{
            
            marginTop: "5%",
            borderRadius: 20,
            width: "100%",
            height: 300
          }}
          source={require("../../..//assets/cotton1.jpg")}
        />
        <View style={{ marginTop: 20 ,marginHorizontal: 20}}>
          <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>
            Cotton, often referred to as "white gold," is a major Kharif crop in
            North India, cultivated from June to October. It thrives in states
            like Punjab, Haryana, and Rajasthan, where the warm climate and
            well-drained black or loamy soils provide ideal conditions. Cotton
            is primarily grown for its fibers, which are used in the textile
            industry, and its seeds, which are processed for oil and animal
            feed. Farmers often adopt high-yielding varieties and employ
            techniques like drip irrigation and integrated pest management to
            enhance productivity. However, cotton cultivation faces challenges
            such as pests like bollworms and diseases like leaf curl virus.
            Timely application of pesticides and crop rotation are common
            strategies to mitigate these issues. Cotton remains a vital crop in
            North Indian agriculture, contributing significantly to the region’s
            economy and employment.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
