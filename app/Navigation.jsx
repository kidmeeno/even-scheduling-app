import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EventScreen" component={EventScreen} />
      </Stack.Navigator>
  );
};

export default Navigation;
