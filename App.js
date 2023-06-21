import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 

import Constants from 'expo-constants';

import Exemplo_001 from './components/exemplo_001';
import Exemplo_002 from './components/exemplo_002';
import Exemplo_003 from './components/exemplo_003';
import Exemplo_004 from './components/exemplo_004'; 
import Exemplo_005 from './components/exemplo_005'; 
import Exemplo_006 from './components/exemplo_006'; 
import Exemplo_007 from './components/exemplo_007'; 

import Atividade_001 from './components/atividade_001'; 
import Atividade_002 from './components/atividade_002'; 
import Atividade_003 from './components/atividade_003'; 
import Atividade_004 from './components/atividade_004'; 
import Atividade_005 from './components/atividade_005'; 
import Atividade_006 from './components/atividade_006'; 
import Atividade_007 from './components/atividade_007'; 

import Velha from './components/velha';

const corApp = '#fff';

export default function App() {
  return (
    <View style={styles.container}>
      <Velha />
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
