import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './Style';
import { GlobalDataContext } from './GlobalDataContext';

export default function BeerScreen () {
  
  
    return (
      <View style={styles.container}>
        <GlobalDataContext.Consumer>
        { 
          (data)=>{ 
              console.log("Data:" + data );
              return(
                <View>
                    <Text>{ data? data[0].naam: "leeg"}</Text>
                    <Text>BeerScreen</Text>
                </View>);
            }
        }
        </GlobalDataContext.Consumer>
  
        <StatusBar style="auto" />
      </View>);
  
  }