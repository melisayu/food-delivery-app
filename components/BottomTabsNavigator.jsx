import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import BottomTabs from './BottomTabs';

const HomeScreenStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PastOrdersStack = createStackNavigator();

const Home = () => (
  <HomeScreenStack.Navigator>
    <HomeScreenStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </HomeScreenStack.Navigator>
)

const Favorite = () => (
  <FavoriteStack.Navigator>
    <FavoriteStack.Screen
      name="FavoriteScreen"
      component={FavoriteScreen}
      options={{
        headerLeft: () => <Icon.Button name="heart"></Icon.Button>
      }}
    />
  </FavoriteStack.Navigator>
)

const Profile = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="ProfileScreen"
    />
  </ProfileStack.Navigator>
)

const PastOrders = () => (
  <PastOrdersStack.Navigator>
    <PastOrdersStack.Screen
      name="PastOrdersScreen"
    />
  </PastOrdersStack.Navigator>
)

const BottomTab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <BottomTab.Navigator tabBar={props => <BottomTabs {...props} />}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Favorite" component={Favorite} />
      <BottomTab.Screen name="Profile" component={Profile} />
      <BottomTab.Screen name="PastOrders" component={PastOrders} />
    </BottomTab.Navigator>
  )
}

export default BottomTabsNavigator;
