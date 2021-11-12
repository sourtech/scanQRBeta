import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import React from "react";
import { StatusBar } from 'expo-status-bar';
import colors from '../constats/colors';

export default function Home(props){

    const {navigation} = props;
    return(
        <View style={styles.container}>
            <TouchableOpacity  style={styles.btnscan} onPress={() => navigation.navigate("scan-qr")} >
                <Text style={styles.btnscanText}>COMPROBAR QR</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    btnscan:{
        borderRadius: 200,
        backgroundColor: colors.primary,
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