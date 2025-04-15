import { Stack } from "expo-router";
import { View ,Text} from "react-native";
import AppBar from "../../../components/AppBar.js";
import { useTheme} from "react-native-paper";
export default function rabi(){
    const theme =useTheme()
    return (<View style={{flex: 1,backgroundColor: theme.colors.background}}>
                    <AppBar text="Rice" showSettings= {false}/>
                </View>
                
            )
}