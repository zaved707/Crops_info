import { Stack } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";

import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
export default function rabi() {
  const theme = useTheme();
  return (
    
      <View
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <AppBar text="Rice" showSettings={false} />
        <ScrollView style={{  }}>
          <Image
            style={{
              marginTop: "5%",
              borderRadius: 20,
              width: "100%",
              height: 300,
            }}
            source={require("../../..//assets/rice1.jpg")}
          />
          <View style={{ marginTop: 20,marginHorizontal: 20 }}>
            <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>
              Rice, a staple food for millions, holds a central place in North
              Indian agriculture, particularly in states like Punjab, Haryana,
              Uttar Pradesh, and Bihar. As a primary Kharif crop, rice thrives
              during the monsoon season (June to October), benefiting from
              abundant rainfall. However, in some regions, summer rice,
              cultivated during the Zaid season (March to June), is grown with
              the aid of irrigation, showcasing the crop’s adaptability. In
              North India, rice is synonymous with cultural and economic
              significance. The region is renowned for producing high-quality
              varieties like Basmati, prized for its aroma and long grains,
              alongside other varieties such as IR-64 and Sona Masuri. Punjab
              and Haryana, often called the "Granaries of India," lead in rice
              production, contributing significantly to both domestic
              consumption and exports. Rice cultivation in North India typically
              involves transplanting seedlings into flooded paddy fields, a
              method that ensures optimal growth in the region’s fertile,
              clayey, or loamy soils. Modern techniques, such as the System of
              Rice Intensification (SRI), are increasingly adopted to enhance
              yields while conserving water. However, rice is a water-intensive
              crop, requiring consistent irrigation, especially for Zaid season
              cultivation, which relies on canal systems or groundwater. Despite
              its importance, rice farming faces challenges. Water scarcity,
              exacerbated by over-extraction of groundwater, poses a threat,
              particularly in Punjab and Haryana. Pests like the brown plant
              hopper and diseases such as blast can reduce yields. Additionally,
              climate change introduces uncertainties, with erratic monsoons
              affecting Kharif rice and rising temperatures impacting Zaid rice.
              To address these challenges, North Indian farmers are adopting
              sustainable practices, including drought-resistant varieties and
              precision irrigation. Government initiatives, such as subsidies
              for micro-irrigation and crop insurance, further support rice
              farmers. Rice remains a cornerstone of North Indian agriculture,
              balancing tradition with innovation. Its continued cultivation
              reflects the resilience of farmers and the crop’s enduring role in
              feeding the nation.
            </Text>
          </View>
        </ScrollView>
     </View>
  );
}
