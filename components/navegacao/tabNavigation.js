import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Exemplos from './exemplos';
import Atividades from './atividades';

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Exemplos" component={Exemplos} />
      <Tab.Screen name="Atividades" component={Atividades} />
    </Tab.Navigator>
  );
}

export default MyTabs;