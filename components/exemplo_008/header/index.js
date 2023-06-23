import * as React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        {title}
      </Text>
    </View>
  );
}

Header.defaultProps = {
  title: 'Lista de compra', 
}

