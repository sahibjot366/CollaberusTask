import React from 'react';
import HomeScreen from '../modules/home/homescreen';
import EditScreen from '../modules/home/editscreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default AppNavigator = () => (
  <Stack.Navigator initialRouteName="homescreen">
    <Stack.Screen name="homescreen" component={HomeScreen} />
    <Stack.Screen name="editscreen" component={EditScreen} />
  </Stack.Navigator>
);
