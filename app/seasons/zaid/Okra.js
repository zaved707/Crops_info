import { Stack } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme } from "react-native-paper";
export default function rabi() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar text="Okra" showSettings={false} />
      <ScrollView style={{}}>
        <Image
          style={{
            marginTop: "5%",
            borderRadius: 20,
            width: "100%",
            height: 300,
          }}
          source={require("../../..//assets/okra1.jpg")}
        />
        <View style={{ marginTop: 20 ,marginHorizontal: 20}}>
          <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>
            Okra, commonly referred to as "bhindi" in Hindi or "ladies' fingers"
            in English, is a widely cherished vegetable in Indian cuisine,
            celebrated for its unique texture, mild flavor, and nutritional
            value. This green, elongated, pod-like vegetable belongs to the
            mallow family and is cultivated extensively across India, thriving
            in warm climates. Okra is characterized by its slightly fuzzy
            exterior and a distinctive mucilaginous (slimy) interior, which
            becomes more pronounced when cooked with moisture. However, this
            texture can be reduced through cooking techniques like dry roasting,
            frying, or sautéing with acidic ingredients such as tomatoes or
            tamarind. In Indian cooking, okra is incredibly versatile and
            features in a variety of regional dishes. One of the most popular
            preparations is **bhindi masala**, a North Indian stir-fry where
            okra is sautéed with onions, tomatoes, and a blend of spices like
            cumin, coriander, turmeric, and garam masala, resulting in a
            flavorful and mildly spicy dish. In South India, okra is often
            incorporated into **sambar** (a lentil-based vegetable stew) or
            cooked as a dry curry with coconut and curry leaves. Another beloved
            preparation is **stuffed bhindi**, where the pods are slit and
            filled with a mixture of ground spices, such as cumin, red chili
            powder, and dried mango powder (amchur), then pan-fried to a crisp
            texture. Okra can also be battered with chickpea flour (besan) and
            spices to make crispy fritters, known as **bhindi pakora**, a
            popular snack or side dish. Nutritionally, okra is a powerhouse,
            rich in dietary fiber, which aids digestion, and packed with
            essential nutrients like vitamins C and K, folate, and antioxidants
            that support immune health and reduce inflammation. It is low in
            calories, making it a great choice for healthy diets. The mucilage
            in okra is believed to have soothing properties for the digestive
            system. Okra’s adaptability makes it a favorite in both rural and
            urban Indian households, and its mild flavor pairs well with bold
            spices, making it a perfect canvas for India’s diverse culinary
            traditions. Whether served as a standalone dish, a side to rice or
            roti, or as part of a larger meal, okra remains a beloved ingredient
            across the country.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
