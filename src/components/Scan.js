import {Button, Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, { useEffect, useState } from 'react';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { Icon } from "react-native-elements";
import colors from '../constats/colors'

export default function Scan(props){
    const [hasPermission, setHasPermission] = useState(null);    
    const {navigation, scanned, handleBarCodeScanned} = props;
    const { width } = Dimensions.get('window');

    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');    
      })();
    }, []);

    if (hasPermission === null) {
      return <Text style={styles.permisson}>Sin permiso para acceder a la cámara</Text>;
    }
    if (hasPermission === false) {
      return <Text style={styles.permisson}>Sin acceso a la cámara</Text>;
    }    

    return(     
        <View style={styles.container}>
          <BarCodeScanner 
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
              style={StyleSheet.absoluteFillObject}       
          />            
          <View style={styles.contentBottom}>
              <TouchableOpacity style={styles.btnCircle} onPress={() => navigation.navigate("result")} >
                <Icon  type='material-community'  name='flashlight'  color='#fff' size={25}  />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.btnCircle} onPress={() => navigation.navigate("home")} >
                <Icon  type='material-community'  name='close'  color='#fff' size={25}  />
              </TouchableOpacity>              
          </View>   
        </View>            
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffffff',
    },
    permisson:{
      alignSelf:'center',  
      paddingTop:20,
      fontSize:18,  
    },
    contentBottom: {
      flex: 1,
      flexDirection:'row',
      alignItems:'flex-end',
      paddingLeft:20,
      paddingRight:20,
      paddingBottom:140,
      justifyContent:'space-between',
    },
    btnCircle:{
      height: 50,
      width: 50,
      borderRadius: 50,
      backgroundColor: colors.accent,
      justifyContent: 'center',
    }      
});