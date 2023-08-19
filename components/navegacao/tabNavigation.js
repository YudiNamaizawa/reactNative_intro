import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Stack from './stackNavigation';
import Exemplos from './exemplos'
import StackAtv from './stackNavigationAtv';

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Stack" component={Stack}/>
      <Tab.Screen name="StackAtv" component={StackAtv} />
    </Tab.Navigator>
  );
}

export default MyTabs;