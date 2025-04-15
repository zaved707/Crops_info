import { StyleSheet,Pressable, Text, StatusBar, Image, View, useColorScheme } from "react-native";
import {Link , router} from "expo-router"
import AppBar from "../components/AppBar.js";
import BigButton from "../components/Button.js";
import { useTheme} from "react-native-paper";
export default function App() {
 
    const theme=useTheme()
  return (
    
      <View
        style={{
          backgroundColor: theme.colors.background,
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <StatusBar />
        <AppBar text='Select Season'/>
        
        <View
          style={{
            width: "100%",
            backgroundColor: theme.colors.surfaceVariant,
            marginTop: '5%',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: theme.colors.outline,
            padding: 20,
            gap: 20
          }}
        >
            
            
          <BigButton text='Rabi' height='70' href='/seasons/rabi/main' color={theme.colors.primary}   />
          
          <BigButton startIcon= 'sunny' text='Zaid' href='/seasons/zaid/main' height='70'/>
          <BigButton startIcon= 'rainy-sharp' text='Kharif'href='/seasons/kharif/main'  height='70' color={theme.colors.primary}/>
        </View>
       
        <Image style={{ marginTop:'10%' ,borderRadius:20, width: "90%", height: 350}} source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'}} />

          {/* <Image style={{ marginTop:'10%' ,borderRadius:20, width: "90%", height: 350}} source={require('../assets/plant1.jpg')} /> */}
       
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
