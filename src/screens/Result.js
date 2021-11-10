import {Button, Image, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";

export default function Result(props){
    const {navigation} = props;
    return(
        <View style={styles.container}>
            
            <View style={{ flex: 1, alignItems: "center", marginTop:40 }}>
            <Image
                source={require("../../assets/nofound.png")}
                resizeMode="cover"
                style={{ width: 200, height: 200 }}
            />
            <Text style={{fontSize:20, marginTop:15, color:'#7999A6'}}>No se han encontrado Ticket</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',  
        paddingTop:20,    
    }
  });