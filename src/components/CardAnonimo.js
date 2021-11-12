import {Button, Text, TouchableOpacity, View} from "react-native";
import React, { useState } from 'react';

import styles from './CardStyles';

export default function CardNotFound(props){
    const {userData} = props;    
    return(     
        <View style={[styles.card, styles.cardAccept]}>
            <Text style={[styles.cardCuit, styles.cardCuitOK]}>La entrada no esta relacionada a ninguna persona</Text>

            <View style={styles.msnContent}> 
                <Text style={styles.msnWhite}>Fecha de compra {userData.dateUsed}</Text>  
                <Text style={styles.msnWhite}>Comprada por {userData.nameUser}</Text>  
                <View style={{marginTop:20, flex:1, width:'100%'}}>
                    <TouchableOpacity style={styles.btnOK} onPress={() => alert('Aceptada')} >
                        <Text style={styles.btnOkText}>Aceptar</Text>
                    </TouchableOpacity>    
                </View>                      
            </View>              
        </View>           
    )
}
