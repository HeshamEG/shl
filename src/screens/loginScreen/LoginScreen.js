import React, { Component } from "react";
import { View,Animated,Picker, Text, Button, TextInput, StyleSheet,ImageBackground } from "react-native";
import {Card,Image,CardSection,CardButton} from "./../../components/commonUI"
import backgroundImage from "./../../assets/backgroundImage.png"
import shlUncolored from "./../../assets/shlUncolored.png";

import buttonImage from "./../../assets/buttonBG.png";

 class LoginScreen extends Component {
   static navigatorStyle = { navBarHidden: true };
   //  state = { fadeAnim: new Animated.Value(0) }; // Initial value for opacity: 0
   state = { user: "", fadeAnim: new Animated.Value(0) };
   updateUser = user => {
     this.setState({ user: user });
   };
  //  componentDidMount() {
  //    Animated.timing(
  //      // Animate over time
  //      this.state.fadeAnim, // The animated value to drive
  //      {
  //        toValue: 1, // Animate to opacity: 1 (opaque)
  //        duration: 10000 // Make it take a while
  //      }
  //    ).start(); // Starts the animation
  //  }
   constructor(props) {
     super(props);
   }

   render() {
      //  let { fadeAnim } = this.state;
     return <ImageBackground source={backgroundImage} style={styles.imageBackground}>
         {/* <Card> */}
         <View style={[styles.smallSpace]} />
         <ImageBackground style={[styles.cardheader, { width: "23%" }]} source={shlUncolored} />
         <View style={[styles.smallSpace]} />

         <CardSection style={[styles.cardsection]}>
           <View style={styles.cardhead}>
             <Text style={[styles.textStyle]}>ادخل رقم الجوال</Text>
             <Text style={[styles.textHintStyle]}>
               يجب تسجيل الدخول حتي تستطيع الاستفادة من
             </Text>
             <Text> تطبيق سهل</Text>
           </View>

           <View style={[styles.pickerAndInputSection]}>
             <View style={{ flexDirection: "column", flex: 3 }}>
               <Text style={[styles.textStyle]}>رقم الهاتف </Text>
               <TextInput />
             </View>

             <View style={{ flexDirection: "column", flex: 1 }}>
               <Text style={[styles.textStyle]}>الدولة</Text>
               <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
                 <Picker.Item label="Steve" />
                 <Picker.Item label="Ellen" value="ellen" />
                 <Picker.Item label="Maria" value="maria" />
               </Picker>
             </View>
           </View>

           <ImageBackground source={buttonImage} style={styles.loginButtonBackground}>
             <CardButton Children="التسجيل" />
           </ImageBackground>
         </CardSection>

         <View style={[styles.card]} />
       </ImageBackground>;
   }
 }


const styles = StyleSheet.create({
  cardhead: {
    flex: 2,
    marginBottom: 40,
    // justifyContent: 'center',
    alignItems: "center"
  },
  loginButtonBackground: {
    flex: 0.7,
    marginTop: "20%",
    marginVertical: "-13%",
    width: "50%",

    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    alignSelf: "center",
    color: "red"
  },
  card: {
    borderWidth: 0,
    flex: 4,
    width: "100%",
    height: "100%"
  },
  cardheader: {
    flex: 4,
// padding: -20,
marginHorizontal: '20%',
    // width: "100%"
  },
  smallSpace:{
    flex:1
  },
  textStyle: {
    fontFamily: "bold",
    fontSize: 25,
    color: "#0F9090"
  },
  textHintStyle: {
    alignItems: "center",
    fontFamily: "normal",
    marginBottom: 4
  },
  cardsection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 7,
    flexDirection: "column",
    width: "95%"
    // height: "40%"
  },

  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  pickerAndInputSection: {
    flexDirection: "row",
    flex: 2,
    marginVertical: "-30%"
  }
});

export default LoginScreen;
