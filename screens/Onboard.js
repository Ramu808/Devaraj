
import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        
               
        <Text>{`
Hi
this is a test message.
hhhh
`}</Text>
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});