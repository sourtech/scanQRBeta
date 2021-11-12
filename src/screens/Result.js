import {Button, Image, StyleSheet, Text, View} from "react-native";

import CardNotFound from '../components/CardNotFound';
import React from "react";

export default function Result(props){
    const {navigation} = props;
    return(
        <View style={styles.container}>            
            <CardNotFound></CardNotFound>
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