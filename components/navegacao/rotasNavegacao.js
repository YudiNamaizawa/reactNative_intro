import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Tab from './tabNavigation';
import Velha from '../velha'; 

const Drawer = createDrawerNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tab">
        <Drawer.Screen name="Tab" component={Tab} />
        <Drawer.Screen name="Velha" component={Velha} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
