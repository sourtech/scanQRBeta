//import Home from "../screens/ScanQR";

import HomeStack from "./HomeStack";
import { Icon } from "react-native-elements";
import React from 'react';
import Search from "../screens/Search";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator
            initialRouteName="homestack"

            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),
                tabBarActiveTintColor: "#5e5ce6",
                tabBarInactiveTintColor: "#707070",
                tabBarStyle: { 
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#15123b',
                    borderRadius: 15,
                    height: 90,
                    ...style.shadow,
                    
                },
                tabBarShowLabel: false,
            })}        
        >
            <Tab.Screen name="homestack" component={HomeStack} options={{headerShown:false}} />
            <Tab.Screen name="search" component={Search} options={{title: 'CUIT'}} />            
        </Tab.Navigator>
    )
}

function screenOptions(route, color) {
    let iconName;
    let size;
  
    switch (route.name) {
      case "homestack":
        iconName = "qrcode-scan";
        size = 32;
        break;
      case "search":
        iconName = "magnify";
        size = 38;
        break;
    }
    return (
      <Icon type="material-community" name={iconName} size={size} color={color} />
    );
  }

  const style = StyleSheet.create({
      shadow:{
          shadowColor: '#7f5df0',
          shadowOffset:{
              width: 0,
              height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation:5,
      }
  });