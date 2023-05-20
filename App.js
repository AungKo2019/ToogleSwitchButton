import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Switch } from 'react-native';
import React,{useState} from 'react'

export default function App() {

  const [isEnable,setIsEnable]=useState(false);
  const toogleSwitch=()=>setIsEnable(previousState=>!previousState)

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:22,margin:20}}>Are You a Developer?</Text>
      <Switch
        // trackColor={{false:'#000',true:'#026efd'}}
        trackColor={{false:'blue',true:'green'}}
        // thumbColor={isEnable?'#f5dd4b':'#f4f3f4'}
        thumbColor={isEnable?'red':'yellow'}
        // ios_backgroundColor='#3e3e3e'
        onValueChange={toogleSwitch}
        value={isEnable}
        style={{transform:[{scaleX:2},{scaleY:2}]}} //changing the size of switch button
        onChange={isEnable?(console.log("True")):(console.log("False"))}
      />
      <StatusBar style='auto'/>
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
