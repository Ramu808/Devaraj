import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, Text,
  Button,
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen'
import {DrawerContent} from './screens/DrawerContent'
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import ExploreScreen from './screens/ExploreScreen';



const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} /> 
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> 
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> 
        <Drawer.Screen name="ExploreScreen" component={ExploreScreen} /> 
      </Drawer.Navigator>


   
    </NavigationContainer>
  );
};
export default App;