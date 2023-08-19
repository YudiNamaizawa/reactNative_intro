import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Exemplos from './exemplos';
import Ex1 from '../exemplos/exemplo_001';
import Ex2 from '../exemplos/exemplo_002';
import Ex3 from '../exemplos/exemplo_003';
import Ex4 from '../exemplos/exemplo_004';
import Ex5 from '../exemplos/exemplo_005';
import Ex6 from '../exemplos/exemplo_006';
import Ex7 from '../exemplos/exemplo_007';
import Ex8 from '../exemplos/exemplo_008';

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Exemplos" component={Exemplos} />
      <Stack.Screen name="Ex1" component={Ex1} />
      <Stack.Screen name="Ex2" component={Ex2} />
      <Stack.Screen name="Ex3" component={Ex3} />
      <Stack.Screen name="Ex4" component={Ex4} />
      <Stack.Screen name="Ex5" component={Ex5} />
      <Stack.Screen name="Ex6" component={Ex6} />
      <Stack.Screen name="Ex7" component={Ex7} />
      <Stack.Screen name="Ex8" component={Ex8} />
    </Stack.Navigator>
  );
}

export default MyStack;