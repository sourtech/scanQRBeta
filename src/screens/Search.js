import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";

import { SearchBar } from 'react-native-elements';

export default function Search(){
    const [search, setSearch] = useState("");
    useEffect(() => {
        if (search) {
          alert(search);
        }
      }, [search]);   

    return(
        <View>
            <SearchBar
                placeholder="Buscar por CUIT..."
                onChangeText={(e) => setSearch(e)}
                value={search}
                keyboardType="numeric"
                containerStyle={styles.searchBar}
                maxLength={10}
            /> 
            {/* <Text>Existen casos que el QR puede existir pero no tiene una persona relacionada</Text> */}
            <View style={styles.containerList} >

              <View style={[styles.card, styles.cardAccept]}>
                  <Text style={[styles.cardName, styles.cardNameOK]}>Hernan Matias Roig</Text>
                  <Text style={[styles.cardCuit, styles.cardCuitOK]}>2025638049</Text>
                  <View style={styles.msnContent}> 
                    <TouchableOpacity style={styles.btnOK} onPress={() => alert('Aceptada')} >
                      <Text style={styles.btnOkText}>Aceptar</Text>
                    </TouchableOpacity>                    
                  </View>
              </View>

              <View style={[styles.card, styles.cardDenegate]}>
                  <Text style={styles.cardName}>Hernan Matias Roig</Text>
                  <Text style={styles.cardCuit}>2025638049</Text>
                  <View style={styles.msnContent}> 
                    <Text style={styles.msn}>Esta entrada ya fue usada </Text>  
                    <Text style={styles.msn}>22/20/2010 18:30</Text>        
                  </View>
          
              </View>
           
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
      //marginBottom: 20,
    },
    textInput:{
        marginBottom: 20,
    },
    containerList:{
      margin: 10,
    },
    card:{
      padding: 14,
      paddingTop:30,
      paddingBottom: 30,
      borderRadius: 10,
      width: '100%',
      borderColor: '#000000',
      marginTop:10,
      marginBottom:20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      
      elevation: 10,      
    },
    cardAccept:{
      backgroundColor: '#ffffff',
      
    },
    cardDenegate:{
      backgroundColor: '#F9627D',
    },    
    cardName:{
      fontSize: 22,
      color: '#ffffff',
      marginBottom:5,
      fontWeight:'bold',
      textAlign: 'center'
    },
    cardNameOK:{
      color: '#000000',
    },    
    cardCuit:{
      fontSize: 20,
      color: '#ffffff',
      marginBottom:10,
      textAlign: 'center'
    },
    cardCuitOK:{
      color: '#000000',
    },     
    btnOK:{
      borderRadius: 10,
      backgroundColor: '#44DC8A',
      height: 50,
      width: '100%',
      justifyContent: 'center'
    },
    btnOkText:{
      color: '#ffffff',
      fontSize: 20,
      alignSelf: 'center'
    },
    msnContent:{
      padding: 10,
      alignItems:'center',
    },     
    msn:{
      color: '#ffffff',
      fontSize: 16,      
      paddingBottom:5,
    } 
  });