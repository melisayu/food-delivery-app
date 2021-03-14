import React from 'react';;
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CreateServer from './server';

import BottomTabsNavigator from './components/BottomTabsNavigator';
import GetStarted from './screens/GetStarted';


CreateServer();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={GetStarted}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
