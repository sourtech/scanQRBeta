import {Button, Image, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";

import styles from './CardStyles';

export default function Result(props){
    const {navigation} = props;
    return(
            
        <View style={{ flex: 1, alignItems: "center", marginTop:40 }}>
        <Image
            source={require("../../assets/nofound.png")}
            resizeMode="cover"
            style={{ width: 200, height: 200 }}
        />
        <Text style={{fontSize:20, marginTop:15, color:'#7999A6'}}>No se han encontrado Ticket</Text>
        </View>

    );
}

