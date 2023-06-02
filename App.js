import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 

import Constants from 'expo-constants';

import Apostila_003 from './components/apostila_003';
import Apostila_004 from './components/apostila_004';

const corApp = '#fff';

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila_004 />
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
