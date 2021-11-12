import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import React, {useEffect, useState} from "react";

import Card from '../components/Card';
import CardAnonimo from '../components/CardAnonimo';
import CardNotFound from '../components/CardNotFound';
import CardUsed from '../components/CardUsed';
import { SearchBar } from 'react-native-elements';
import {searchCuit} from '../Api';

export default function Search(){
  const [enteredValue, setEnteredValue] = useState('');
  const [userData, setUserData] = useState([]);
  
    useEffect(() => {
      if (enteredValue.length>5) {        
        searchCuit(enteredValue)
        .then(response => {
          setUserData(response);
        }).catch(() => {
          setUserData([]);
        });
      }else{
        setUserData([]);
      }
    }, [enteredValue]);   

    const handleInputValue = text => {
      setEnteredValue(text.replace(/[^0-9]/g, ''));
    };

     
    
    const renderItem = ({ item }) => {
      console.log(item)
      if(item.status=='ok'){
        return <Card userData={item} />
      }else if(item.status=='ko'){
        return <CardUsed userData={item} />
      }else if(item.status=='anonima'){
        return <CardAnonimo userData={item} />
      }
      
    };
    

  

    return(
      <SafeAreaView style={styles.area}>
        <View style={styles.container}>
          <View style={{marginLeft:10, marginRight:10}}>
            <SearchBar 
                placeholder="Buscar por CUIT..."
                onChangeText={(e) => handleInputValue(e)}
                value={enteredValue}
                keyboardType="numeric"
                containerStyle={styles.searchBar}
                maxLength={10}
                inputStyle={{backgroundColor: 'white', paddingLeft:10}}
                containerStyle={
                  {
                    backgroundColor: 'white',
                    borderBottomColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderRadius:50
                  }
                }
                inputContainerStyle={{backgroundColor: 'white'}}                
            /> 
          </View>
          <View style={styles.containerList} >
            <FlatList
              data={userData}
              renderItem={renderItem}
              ListEmptyComponent={<CardNotFound/>}
              keyExtractor={item => item.id}
            />
          </View>            
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    paddingTop:30,
  },    
  container: {
    flex: 1,
    paddingTop:20,
  },  
    searchBar: {
      //marginBottom: 20,
    },
    textInput:{
        marginBottom: 20,
    },
    containerList:{
      margin: 10,
    },

  });