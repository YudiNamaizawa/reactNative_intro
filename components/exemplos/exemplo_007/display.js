import { Text, View } from 'react-native'; 

import styles from './styles_display';

export default props => 
  <View style={styles.display}>
    <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
  </View>