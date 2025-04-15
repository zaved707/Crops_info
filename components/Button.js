
import * as React from 'react';
import { View, Text ,Pressable } from 'react-native';
import { PaperProvider, Button, Appbar, useTheme } from "react-native-paper";
export default function myComponent(props){
    const theme=useTheme();
    return (   
         <View
                   style={{
                     alignSelf: "stretch",
                     justifyContent: "center",
                     borderRadius: 50,
                     overflow: 'hidden',
                     elevation: 25,
                    
                   }}
                 >
                   <Pressable
                     style={{
                       height: 50,
                       backgroundColor: theme.colors.primary,
                       
                       alignItems: "center",
                       justifyContent: "center",
                     }}
                     android_ripple={{ color: theme.colors.onPrimaryContainer}}
                     onPress={() => console.log("hi")}
                   >
                     <Text>{props.text}</Text>
                   </Pressable>
                 </View>
    )
}