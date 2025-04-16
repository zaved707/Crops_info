import { Stack } from "expo-router";
import { View ,Text,ScrollView,Image} from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme} from "react-native-paper";
export default function rabi(){
    const theme =useTheme()
    return (<View style={{flex: 1,backgroundColor: theme.colors.background}}>
                    <AppBar text="Maize" showSettings= {false}/>
                    <ScrollView style={{ }}>
                              <Image
                                style={{
                                  marginTop: "5%",
                                  borderRadius: 20,
                                  width: "100%",
                                  height: 300,
                                }}
                                source={require("../../..//assets/maize1.jpg")}
                              />
                              <View style={{ marginTop: 20,marginHorizontal: 20 }}>
                                <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>
                                  Maize, a versatile cereal crop, is a key Kharif crop in North
                                  India, cultivated from June to October. It thrives in states like
                                  Uttar Pradesh, Bihar, and Punjab, where the warm, humid climate
                                  and well-drained loamy soils provide ideal conditions. Maize is
                                  valued for its use in food products, animal feed, and industrial
                                  applications. Farmers often use hybrid varieties and adopt
                                  practices like crop rotation and balanced fertilization to enhance
                                  productivity. However, maize cultivation faces challenges such as
                                  pests like stem borers and diseases like leaf blight. Integrated
                                  pest management and timely sowing are common strategies to address
                                  these issues. Maize remains a cornerstone of North Indian
                                  agriculture, contributing to food security and the rural economy.
                                </Text>
                              </View>
                            </ScrollView>
                </View>
                
            )
}