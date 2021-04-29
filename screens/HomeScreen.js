import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar ,Modal, TextInput,Image, ImageBackground, TouchableOpacity} from 'react-native';



const HomeScreen = ({navigation}) => {


  
    return (
      <View style={styles.container}>
     
        <ImageBackground source={require('./Asserts/white.jpg')}  
       style={{width: 300, height: 550,marginLeft:1,marginTop:-32}} >
         <Text style={{fontSize:22,marginLeft:12}}>jain Enterprises</Text>
         <TouchableOpacity>
           <Text style={{fontSize:16, color:'red',marginLeft:253,marginTop:-17}}>Edit</Text>
         </TouchableOpacity>
       
       <Image source={require('./Asserts/box1.png')}
       style={{width:130,height:130,marginTop:32}}
       ></Image>
       <Image source={require('./Asserts/box2.png')}
       style={{width:130,height:130,marginLeft:152,marginBottom:-12,marginTop:-127}}
       ></Image>

<Image source={require('./Asserts/box3.png')}
       style={{width:130,height:130,marginTop:22}}
       ></Image>
       <Image source={require('./Asserts/box4.png')}
       style={{width:130,height:130,marginLeft:152,marginBottom:-12,marginTop:-127}}
       ></Image>

<Image source={require('./Asserts/box4.png')}
       style={{width:130,height:130,marginTop:22}}
       ></Image>
       <Image source={require('./Asserts/box5.png')}
       style={{width:130,height:130,marginLeft:152,marginBottom:-12,marginTop:-127}}
       ></Image>
         </ImageBackground>  
   
      
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  Text:{
    backgroundColor:'white',paddingHorizontal:130,paddingVertical:30
  },
});