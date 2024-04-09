import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

const App =()=>{
  return (
  <>
  <View style={styles.container}>
     <Text>Hello EveryOne, I am Hari</Text>
     <Text>Welcome to the Background color changer</Text>
  </View>
  </>
  )
}

export default App;


const styles = StyleSheet.create({
  container:{
    backgroundColor:'purple',
    flex:1,
    justifyContent:'center',
    alignContent:'center'
  }
})
