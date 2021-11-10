import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import React from "react";
import { StatusBar } from 'expo-status-bar';

export default function Home(props){

    const {navigation} = props;
    return(
        <View style={styles.container}>
            {/*
            <Button title="Ir a Home" onPress={() => navigation.navigate("home")}></Button>
            <Button title="Ir a Buscar" onPress={() => navigation.navigate("search")}></Button>
            
            <Button title="COMPROBAR" styles={styles.btnscan} onPress={() => navigation.navigate("search")}></Button>
            */}
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