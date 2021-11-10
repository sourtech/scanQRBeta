import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { BarCodeScanner } from 'expo-barcode-scanner';
import Scan from '../components/Scan';

export default function ScanQR(props){
  
    
    const [camera, setCamera] = useState(false)
    const {navigation} = props;
    const isFocused = useIsFocused();

    const [barCodeKey, setBarCodeKey] = useState();
 
    

    React.useEffect(
      () => navigation.addListener('focus', () => {
            setBarCodeKey(Math.random());
            setCamera(true);
          }
        ),
      []
    );
  
    React.useEffect(
      () => navigation.addListener('blur', () => {
        setBarCodeKey(Math.random()) 
        setCamera(false);
        }
      ),
      []
    );
    
  /*
    if (isFocused){
      setTimeout(() => { setCamera(true) },50);
      console.log('Ahora camera es ' + camera);
    }else{
      setTimeout(() => { 
        //setCamera(false);
        return (<View></View>);
        console.log("te fuiste");
        console.log('Ahora camera es ' + camera);        
      },50);
      
    }
    */

console.log(barCodeKey);
    
    return (
     
        
        <View style={styles.container}>
          
          {camera && <Scan barCodeKey={barCodeKey}></Scan> }
        </View>
        
    );

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