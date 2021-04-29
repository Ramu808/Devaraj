import React,{useState} from 'react';
import { View, Text, Button, StyleSheet ,ImageBackground, TextInput,Image, CheckBox} from 'react-native';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';


 
const ExploreScreen = () => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./Asserts/white.jpg')}  
       style={{width: 320, height: 500,marginLeft:1,marginTop:-32}} >
         
   
      
    <Image source={require('./Asserts/bulb1.jpg')}
       style={{width:80,height:80,marginTop:32}}
       ></Image>
        <Image source={require('./Asserts/bulb2.jpg')}
       style={{width:80,height:80,marginTop:32}}
       ></Image>
        <Image source={require('./Asserts/bulb3.jpg')}
       style={{width:80,height:80,marginTop:32}}
       ></Image>
        
       <View>
         <Text style={styles.Text1}>{`
         12 W Recused Downlight
         ₹112.00 -₹130.00

         `}
         </Text>
       </View>
       <View>
         <Text style={styles.Text2}>{`
         10 W Led Jazz Bollard light
         ₹162.00 - ₹495.00

         `}
         </Text>
       </View>
       <View>
         <Text style={styles.Text3}>{`
         1 W Led cob spolit light
         ₹118.00 - ₹895.01

         `}
         </Text>
       </View>
      
       <Text style={{marginTop:-472,marginLeft:262,backgroundColor:'lightgray',fontSize:15}}>Sort</Text>
       </ImageBackground>
   <Icon style={{marginBottom:422,marginTop:-472,marginLeft:250}} name="times" size={28 } color={'red'}></Icon>
   <Icon style={{marginBottom:342,marginTop:-332,marginLeft:230}} name="times" size={28} color={'red'}></Icon>
   <Icon style={{marginBottom:252,marginTop:-262,marginLeft:230}} name="times" size={28} color={'red'}></Icon>
  <View style={{marginLeft:-262,marginTop:-442,marginBottom:362}}>
   <CheckBox style={{marginLeft:52}}
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        </View>
        <View style={{marginLeft:-262,marginTop:-269,marginBottom:302}}>
   <CheckBox style={{marginLeft:52}}
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
        />
        </View>
        <View style={{marginLeft:-262,marginTop:-232,marginBottom:162}}>
   <CheckBox style={{marginLeft:52}}
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
        </View>
        <View  style = {{color:'red',marginLeft:-141,marginTop:-92,marginBottom:42}}>
        <Button color='gray' title="Add Selected to cart"  ></Button>
        </View>
        <View  style = {{color:'red',marginLeft:181,marginTop:-78,marginBottom:42}}>
        <Button color='red' title="Add all to cart"  ></Button>
        </View>
      </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  Text1:{
    fontSize:15,marginTop:-92,marginLeft:48
  },
  Text2:{
    fontSize:15,marginLeft:48,marginTop:-320
  },
  Text3:{
    fontSize:15,marginLeft:48,marginTop:-200,marginBottom:12
  },
  Text4:{
    fontSize:17,marginLeft:48,marginTop:-90
  },
});