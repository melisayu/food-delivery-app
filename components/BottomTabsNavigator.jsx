import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';

const HomeScreenStack = createStackNavigator();

const Home = () => (
  <HomeScreenStack.Navigator>
    <HomeScreenStack.Screen name="HomeScreen" component={HomeScreen}></HomeScreenStack.Screen>
  </HomeScreenStack.Navigator>
)

const BottomTab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home}></BottomTab.Screen>
    </BottomTab.Navigator>
  )
}

export default BottomTabsNavigator;
