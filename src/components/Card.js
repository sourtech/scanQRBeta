import {Button, Text, TouchableOpacity, View} from "react-native";
import React, { useState } from 'react';

import styles from './CardStyles';

export default function Card(props){
    const {userData} = props;    
    return(     
        <View style={[styles.card, styles.cardAccept]}>
            <Text style={[styles.cardName, styles.cardNameOK]}>{userData.name}</Text>
            <Text style={[styles.cardCuit, styles.cardCuitOK]}>{userData.cuit}</Text>
            <View style={styles.msnContent}> 
                <TouchableOpacity style={styles.btnOK} onPress={() => alert('Aceptada')} >
                    <Text style={styles.btnOkText}>Aceptar</Text>
                </TouchableOpacity>                    
            </View>
        </View>           
    )
}
