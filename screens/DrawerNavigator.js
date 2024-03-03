import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Import createDrawerNavigator from @react-navigation/drawer
import NotificationScreen from './NotificationScreen';
import GuideScreen from './GuideScreen';


const Drawer = createDrawerNavigator(); // Create a Drawer navigator instance

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <Drawer.Screen
        name="GuideScreen"
        component={GuideScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
