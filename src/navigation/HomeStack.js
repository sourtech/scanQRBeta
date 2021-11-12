import Home from "../screens/Home";
import React from "react";
import Result from "../screens/Result";
import ScanQR from "../screens/ScanQR";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeStack(props){
    const {navigation} = props;
    //navigation.setOptions({tabBarVisible: false});
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={{ title: "Multiplicadores" }}
            />
            <Stack.Screen
                name="scan-qr"
                component={ScanQR}
                options={{ title: "Scaner QR" }}
            />
            <Stack.Screen
                name="result"
                component={Result}
                options={{ title: "Resultado" }}
            />            
        </Stack.Navigator> 
    )
}

