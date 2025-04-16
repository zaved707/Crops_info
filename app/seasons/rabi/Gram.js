import { Stack } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar text="Gram" showSettings={false} />
      <ScrollView style={{}}>
        <Image
          style={{
            marginTop: "5%",
            borderRadius: 20,
            width: "100%",
            height: 300,
          }}
          source={require("../../..//assets/gram1.jpg")}
        />
        <View style={{ marginTop: 20 ,marginHorizontal: 20}}>
          <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>
            Gram, also known as chickpea, is a significant Rabi crop in North
            India, cultivated from October to March. It thrives in states like
            Madhya Pradesh, Uttar Pradesh, Rajasthan, and Maharashtra, where the
            cool, dry climate and well-drained loamy soils provide ideal
            conditions. Gram is a rich source of protein and forms a staple in
            Indian diets, often used in curries, snacks, and flour production.
            The crop is drought-tolerant and requires minimal irrigation, making
            it suitable for rainfed farming. Farmers employ traditional
            practices alongside modern techniques, such as high-yielding
            varieties and balanced fertilization, to boost productivity.
            However, gram cultivation faces challenges like pod borer pests and
            diseases such as wilt and blight. Integrated pest management and
            crop rotation are common strategies to mitigate these issues. Gram
            continues to play a vital role in North Indian agriculture,
            contributing to food security and soil health through nitrogen
            fixation.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
