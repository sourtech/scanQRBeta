import * as Permissions from "expo-permissions";

import {Button, Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, { useEffect, useState } from 'react';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { Icon } from "react-native-elements";

export default function Scan(props){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    

    const { width } = Dimensions.get('window');

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          console.log("Status del usefect "+ status);
          setHasPermission(status === 'granted');
     
        })();
      }, []);    

      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        //Vibration.vibrate();
        alert(`TIPO ${type} DATO ${data} a sido escaneado!`);
  
        // con navigation podria mandarlo a la pagina que esta OK
        //
        // navigation.navigate("home")
      };

      if (hasPermission === null) {
        return <Text>Solicitar permiso para la cámara</Text>;
      }
      if (hasPermission === false) {
        return <Text>Sin acceso a la cámara</Text>;
      }    
        

    return(     
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                style={StyleSheet.absoluteFillObject}       
            />
            {scanned && <Button title={'Volver a escanear'} onPress={() => setScanned(false)} />}
            <View style={styles.contentBottom}>
                <TouchableOpacity  style={styles.btnCircle} onPress={() => navigation.navigate("result")} >
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
        top: 0,
       //flexDirection: 'column',
        //justifyContent: 'center',
        backgroundColor:'#ffffff',
        
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
        backgroundColor:'#15123b',
        justifyContent: 'center',
      }      
});