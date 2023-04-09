import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count,setCount]=useState<number>(0);
  const handleinclease=()=>{
    setCount(count+1);
  }
  const handledecrease=()=>{
    if(count===0){
      setCount(0)
    }else{
      setCount(count-1);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count</Text>
      <Text>{count}</Text>
      <View style={styles.btnstyle}>
          <Button title='+' onPress={()=>handleinclease()} color="white"/>
      </View>
      <View style={styles.btnstyle}>
        <Button title='-' onPress={()=>handledecrease()} color="white"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
  },
  btnstyle:{
    marginTop:10,
    backgroundColor:"aqua",
    borderRadius:50,
    width:40,
    height:40,
  },
});
