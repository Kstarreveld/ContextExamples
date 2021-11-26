import { StatusBar } from 'expo-status-bar';
import React, {useContext, useEffect, useState} from 'react';
import { Text, View, Button } from 'react-native';
import styles from './Style';
import { GlobalDataContext } from './GlobalDataContext';
import BeerScreen from './BeerScreen';
import BeerScreen2 from './BeerScreen2';


//De main applicatie
export default function App() {
  const [bierData, setBierData] = useState();
 
  useEffect(() => {
    // Update the document title using the browser API
        getBeer();
  }, []);

  const getBeer = async() =>
  {
     return await fetch( "http://15euros.nl/csp2/modules/api_basic.php")
        .then(response => response.json()) 
        .then(json => {
            setBierData(json)
            console.log("HALLO");
        })
        .catch ( err =>console.log(err));
  }

  const value = {
    bierData,
    setBierData
  }

  return (
    <View style={styles.container}>
      <Text>Bier</Text>
      <Text>{ bierData? bierData[0].naam:"leeg"}</Text>
      <GlobalDataContext.Provider value={bierData}>
        <BeerScreen/>
        <BeerScreen2/>
      </GlobalDataContext.Provider>
     
      <Text>{ "leeg"}</Text>
      <StatusBar style="auto" />
     
    </View>
  );
}
