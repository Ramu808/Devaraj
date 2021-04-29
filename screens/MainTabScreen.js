import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import  Icon  from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import Splash2 from './Splash2';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
     // barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'red',
          tabBarIcon: ({ color }) => (
            <Icon  name="ios-home" color={color} size={26} />
          
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: 'red',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',   
          tabBarColor: 'green',
          
          tabBarIcon: ({ color }) => (
            <Icon name="cart-outline" color={color} size={26} />
          ),
        }}
      />
           <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: 'gray',
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Explore1"
        component={Splash2}
        options={{
          tabBarLabel: 'Splash2',
          tabBarColor: 'gray',
          tabBarIcon: ({ color }) => (
            <Icon name="grid-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight: 'bold'
      }
  
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
  title:'DashBoard',

  headerLeft: ()=>(
    <Icon.Button name="ios-menu" size={25} backgroundColor="red" onPress={() => {navigation.openDrawer()}}>
  
  <Icon style={{marginLeft:170}} name="heart" color={'white'} size={26} />
 
  </Icon.Button>

  
  
   ),
   
   headerRight: ()=>(
    <Icon.Button name="cart-outline" size={25} marginLeft={2} backgroundColor="red" onPress={() => {navigation.openDrawer()}}>
  
  <Icon style={{marginLeft:20}} name="search" color={'white'} size={26} />
 
  </Icon.Button>

  
  
   )
   
   }} />
   
    
    </HomeStack.Navigator>
  
  );
  



  const DetailsStackScreen = ({navigation}) =>(
    <DetailsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight: 'bold'
      }
  
    }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} 
  
  options={{
    title:'My Profile',
    headerLeft: ()=>(
      <Icon.Button name="ios-menu" size={25} backgroundColor="red" onPress={() => {navigation.openDrawer()}}>

        <Icon style={{marginLeft:172}} name="heart" size={25} color={"white"}></Icon>
      </Icon.Button>
    
     
     ),
   
     headerRight: ()=>(
      <Icon.Button name="cart-outline" size={25} marginLeft={2} backgroundColor="red" onPress={() => {navigation.openDrawer()}}>
    
    <Icon style={{marginLeft:20}} name="search" color={'white'} size={26} />
   
    </Icon.Button>
     )
     }} />
  
  
    
    </DetailsStack.Navigator>
  
  );
  
  const ExploreStackScreen = ({navigation}) =>(
    <ExploreStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight: 'bold'
      }
  
    }}>
 <ExploreStack.Screen name="Explore" component={ExploreScreen} 
  
  options={{
    title:'Wishlist',
    headerLeft: ()=>(
      <Icon.Button name="ios-menu" size={25} backgroundColor="red" onPress={() => {navigation.openDrawer()}}>

        <Icon style={{marginLeft:172}} name="heart" size={25} color={"white"}></Icon>
      </Icon.Button>
    
     
     ),

     headerRight: ()=>(
      <Icon.Button name="cart-outline" size={25} marginLeft={2} backgroundColor="red" onPress={() => {navigation.openDrawer()}}>
    
    <Icon style={{marginLeft:20}} name="search" color={'white'} size={26} />
   
    </Icon.Button>

     )
     }} />
   
    </ExploreStack.Navigator>
  );