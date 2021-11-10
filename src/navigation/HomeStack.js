import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import Home from "../screens/Home";
import React from "react";
import Result from "../screens/Result";
import ScanQR from "../screens/ScanQR";
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from "@react-navigation/stack";

//import {unmountComponentAtNode} from 'react-native-web';

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

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    btnscan:{
        borderRadius: 200,
        //padding: 20,
        backgroundColor: '#5e5ce6',
        top: '30%',
        height: 200,
        width: 200,
        justifyContent: 'center'
    },
    btnscanText:{
        color: '#ffffff',
        fontSize: 18,
        alignSelf: 'center'
    }
});