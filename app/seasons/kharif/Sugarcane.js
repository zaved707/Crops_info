import { Stack } from "expo-router";
import { View ,Text,Image,ScrollView} from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme} from "react-native-paper";
export default function rabi(){
    const theme =useTheme()
    return (<View style={{flex: 1,backgroundColor: theme.colors.background}}>
                    <AppBar text="Sugarcane" showSettings= {false} />
                    <ScrollView style={{  }}>
                              <Image
                                style={{
                                  marginTop: "5%",
                                  borderRadius: 20,
                                  width: "100%",
                                  height: 300,
                                }}
                                source={require("../../..//assets/sugarcane1.jpg")}
                              />
                              <View style={{ marginTop: 20 ,marginHorizontal: 20 }}>
                                <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>
                                  Sugarcane, a prominent cash crop, is extensively cultivated in
                                  North India during the Kharif season (June to October). It thrives
                                  in states like Uttar Pradesh, Punjab, and Haryana, where the warm
                                  climate and fertile alluvial soils provide ideal conditions.
                                  Sugarcane is primarily grown for sugar production, but its by-
                                  products, such as molasses and bagasse, are also economically
                                  significant. Farmers often adopt improved varieties and
                                  techniques like intercropping and drip irrigation to enhance
                                  yields. However, sugarcane farming faces challenges such as pests
                                  like borers and diseases like red rot. Integrated pest management
                                  and timely application of fertilizers are common strategies to
                                  address these issues. Sugarcane remains a cornerstone of North
                                  Indian agriculture, contributing significantly to the region’s
                                  economy and the sugar industry.
                                </Text>
                              </View>
                            </ScrollView>
                </View>
                
            )
}