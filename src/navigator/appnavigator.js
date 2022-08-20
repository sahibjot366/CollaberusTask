import React from 'react';
import HomeScreen from '../modules/home/homescreen';
import EditScreen from '../modules/home/editscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="homescreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="homescreen" component={HomeScreen} />
      <Stack.Screen name="editscreen" component={EditScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
