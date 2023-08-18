import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 

import Constants from 'expo-constants';
import 'react-native-gesture-handler';

//import Velha from './components/velha';
import Drawer from './components/navegacao/rotasNavegacao';

const corApp = '#fff';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Drawer />
    //   <StatusBar style={corApp==='#000' ? 'light' : 'dark'} />
    // </View>
    <Drawer />
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
