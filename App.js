import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 

import Constants from 'expo-constants';

import Exemplo_003 from './components/exemplo_003';
import Exemplo_004 from './components/exemplo_004'; 
import Exemplo_005 from './components/exemplo_005'; 
import Exemplo_006 from './components/exemplo_006'; 
import Exemplo_007 from './components/exemplo_007';

const corApp = '#fff';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_007 />
      <StatusBar style={corApp==='#000' ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: corApp,
    padding: 8, 
    paddingTop: Constants.statusBarHeight,
  },
});
