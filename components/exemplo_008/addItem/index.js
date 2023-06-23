import React, { useState } from 'react'; 
import { Text, View, TouchableOpacity, TextInput } from 'react-native'; 
// npm i @expo/vector-icons
import { FontAwesome } from '@expo/vector-icons'; 

import styles from './styles';

export default function AddItem({addItem}) { 

  const [text, setText] = useState(''); 
  
  function adicionarItem() {
    addItem(text); 
    setText('');
  }

  return (
    <View>
      <TextInput 
        placeholder='Adicionar item...' 
        style={styles.input} 
        onChangeText={ (textValue) => setText(textValue) }
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={ () => adicionarItem()} > 
        <Text style={styles.buttonText}>
          <FontAwesome name='plus' size={20} /> Adicionar Item
        </Text>
      </TouchableOpacity>
    </View>
  );
}
