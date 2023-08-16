import React, { useState } from 'react'; 
import { Text, View, TouchableOpacity, TextInput } from 'react-native'; 
import { FontAwesome } from '@expo/vector-icons'; 

import styles from './styles';

export default function AddItem({atualizaItem, itemAtualizar}) { 

  const [text, setText] = useState(''); 

  function valida() {
    text === '' ? 
      atualizaItem(itemAtualizar.id, itemAtualizar.text) 
    :
      atualizaItem(itemAtualizar.id, text);
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder={itemAtualizar.text} 
        style={styles.input} 
        onChangeText={ (textValue) => setText(textValue) }
      />
      <TouchableOpacity style={styles.button} onPress={ () => valida()} > 
        <Text style={styles.buttonText}>
          <FontAwesome name='check' size={20} /> {text === '' ? 'Cancelar' : 'Adicionar Item'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
