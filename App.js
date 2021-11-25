import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

const MyContext = React.createContext("init");

const  Child = () => {
  const [own, setOwn] =useState("own");

  return (
    <View style={styles.container}>
      <Text>{own}</Text>
      <Text>in Child</Text>
      <MyContext.Consumer>
      { 
        ({ data, counter})=>{setOwn(counter); return(
         <View>
           <Text>{data}</Text>
           <Text>{counter}</Text>
          </View>)}
        
      }
      </MyContext.Consumer>

      <StatusBar style="auto" />
    </View>);

}

export default function App() {
  const [welcome, setWelcome] = useState("init");
  const [counter, setCounter ] = useState(1);

  return (
    <View style={styles.container}>
      <Text>{welcome}</Text>
      <Button onPress={()=>{setWelcome("pressed"); setCounter(counter+1)}} title="test"/>
      
      <MyContext.Provider value={({ welcome,counter })}>
          <Child/>
      </MyContext.Provider>
     
     
      <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
