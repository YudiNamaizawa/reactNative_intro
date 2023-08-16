import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'; 
import { FontAwesome } from '@expo/vector-icons'; 

import styles from './styles';

export default function ListItem({item, deleteItem, exibeAtualizaItem}) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text> 
        <View style={styles.pItem}>
          <FontAwesome 
            name='pencil' 
            size={20} 
            color='firebrick' 
            onPress={ () => exibeAtualizaItem({id: item.id, text: item.text})} 
            style={{margin: 5}}
          />
          <FontAwesome 
            name='remove' 
            size={20} 
            color='firebrick' 
            onPress={ () => deleteItem(item.id)} 
            style={{margin: 5}}
          />
        </View>        
      </View>
    </TouchableOpacity>
  );
}
