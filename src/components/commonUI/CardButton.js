/**
 * Created by hesham on 1/31/2018.
 */
import React from 'react';
import {View,Text,TouchableOpacity,ImageBackground} from 'react-native';
import backgroundImage from "./../../assets/buttonBG.png";

const CardButton = ({ onPress, Children,style})=>{
const {ButtonStyle,textStyle}=styles
    {/*<View>*/}
        {/*<Button title="" onPress=""/>*/}
    {/*</View>*/}
    return <TouchableOpacity onPress={onPress} style={[ButtonStyle,style]}>
          <Text style={textStyle}>{Children}</Text>
        
      </TouchableOpacity>;
}
const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  
  ButtonStyle: {
    flex: 1,
    padding: 3,
    // alignSelf: "stretch",
    // borderRadius: 5,
    // borderWidth: 1,
    // height: 10,
    // borderColor: "#007aff",
    marginLeft: 15,
    marginRight: 15,
    // backgroundImage: backgroundImage
    // justifyContent: "flex-start",
    // backgroundColor: "#fff"
  }
};
export  {CardButton};