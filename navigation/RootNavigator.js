import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import StackNavigator from './StackNavigator';

const RootStack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="MainTabs" component={BottomTabNavigator} />
        
        <RootStack.Screen name="Lista" component={StackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}