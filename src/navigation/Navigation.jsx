import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

import DetailsScreen from '../screens/DetailsScreen';

import TestScreen from '../screens/TestScreen';

import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name='MapScreen' component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
