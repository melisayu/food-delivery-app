import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const HomeScreenStack = createStackNavigator();
const FavoriteStack = createStackNavigator();

const Home = () => (
  <HomeScreenStack.Navigator>
    <HomeScreenStack.Screen name="HomeScreen" component={HomeScreen}></HomeScreenStack.Screen>
  </HomeScreenStack.Navigator>
)

const Favorite = () => (
  <FavoriteStack.Navigator>
    <FavoriteStack.Screen name="FavoriteScreen" component={FavoriteScreen}></FavoriteStack.Screen>
  </FavoriteStack.Navigator>
)

const BottomTab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Favorite" component={Favorite} />
    </BottomTab.Navigator>
  )
}

export default BottomTabsNavigator;
