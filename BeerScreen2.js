// Dit is een andere manier om hetzelfde te doen als in BeerScreen , nu maak ik direct gebruik van useContext,
// Deze methode is veel korter en minder omslachtig.
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './Style';
import { useContext } from 'react';
import { GlobalDataContext } from './GlobalDataContext';


export default function BeerScreen2 () {
  
  const bierData = useContext(GlobalDataContext);

    return (
      <View style={styles.container}>
        <View>
            <Text>{ bierData? bierData[0].naam: "leeg"}</Text>
            <Text>BeerScreen2</Text>
        </View>
      
        <StatusBar style="auto" />
      </View>);
  }