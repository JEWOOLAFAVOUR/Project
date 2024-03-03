import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Setting from './Setting'; 
import Home from './Home';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting', 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );1
};

export default BottomTabNavigator;
