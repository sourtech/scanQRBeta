import {Button, Text, TouchableOpacity, View} from "react-native";
import React, { useState } from 'react';

import styles from './CardStyles';

export default function CardUsed(props){
    const {userData} = props;    
    return(     
      <View style={[styles.card, styles.cardDenegate]}>
        <Text style={styles.cardName}>{userData.name}</Text>
        <Text style={styles.cardCuit}>{userData.cuit}</Text>
        <View style={styles.msnContent}> 
          <Text style={styles.msn}>Esta entrada ya fue usada </Text>  
          <Text style={styles.msn}>{userData.dateUsed}</Text>        
        </View>          
      </View>               
    )
}
