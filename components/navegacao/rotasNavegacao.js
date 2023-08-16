import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './home';
import Velha from '../velha'; 

const Drawer = createDrawerNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Velha" component={Velha} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
