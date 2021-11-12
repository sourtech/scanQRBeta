import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Card from '../components/Card';
import CardAnonimo from '../components/CardAnonimo';
import CardNotFound from '../components/CardNotFound';
import CardUsed from '../components/CardUsed';
import MyModal from '../components/Modal';
import Scan from '../components/Scan';
import {searchQR} from '../Api';

export default function ScanQR(props){    
    const [modalVisible, setModalVisible] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [renderComponent, setRenderComponent] = useState(null);
    const [dataUser, setUserData] = useState([])
    const {navigation} = props;

    useEffect(() => {
      handleCards();
    }, [dataUser]);   

    const handleCards = () =>{
      //setUserData(x);
      switch (dataUser.status) {
        case "ok":
          setRenderComponent(
            <Card userData={dataUser} />
          );
          setModalVisible(true);
          break;
        default:
          setRenderComponent(null);
          setModalVisible(false);
          break;
      }
    }

    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      //setModalVisible(true);
      //alert(`TIPO ${type} DATO ${data} a sido escaneado!`);
      //const key = 'ok'

      //FALTA VALIDAR EL TYPE
      console.log(data);
      searchQR(data)
      .then(response => {
        setUserData(response);
        //handleCards(response);
      }).catch(() => {
        setUserData([]);
      });      
      //console.log(dataUser);

      // con navigation podria mandarlo a la pagina que esta OK
      //
      // navigation.navigate("home")
    };

    return (           
        <View style={styles.container}> 
        {scanned && <View ><Button title={'Volver a escanear'} onPress={() => setScanned(false)} /></View>}         
          <Scan 
            navigation={navigation} 
            scanned={scanned}
            handleBarCodeScanned={handleBarCodeScanned}
          />   
          {renderComponent && (
            <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
              {renderComponent}
            </MyModal>
          )}          
        </View>   
             
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 0,
      backgroundColor:'#ffffff',
      
    },
  });