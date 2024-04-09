import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';


const colors = ['#14213d']
const App =()=>{
  const {container,text} = styles;
  const [randomColor, setRandomColor] = useState('')
  const [colorCode ,setColorCode]=useState('')

 
const rbg =()=>{
   const rgbcolor = Math.floor(Math.random()*256)
   return rgbcolor;
}

const changeBg =()=>{
  const color = `rgb(${rbg()},${rbg()},${rbg()})`
  setRandomColor(color);
  setColorCode(color)
}

  return (
  <>
  <StatusBar backgroundColor={randomColor} />
  <View style={[container , {backgroundColor:randomColor}]}>
     <Text style={text}>{colorCode}</Text>
    <TouchableOpacity onPress={changeBg}>
     <Text style={text}>Click Here</Text>
    </TouchableOpacity>
     <Text style={{color:"#000"}}>Random Bg-color changer</Text>
  </View>
  </>
  )
}

export default App;


const styles = StyleSheet.create({
  container:{
    backgroundColor:'#14213d',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
     fontSize:20,
     backgroundColor:'#fca311',
     paddingVertical:10,
     paddingHorizontal:20,
     borderRadius:9,
     color:'#000000',
     marginBottom:12
  }
})
