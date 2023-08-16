import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; 

import styles from './styles';

export default function Index() {

    const [numero, setNumero] = useState(0);

    function addNumber(){
        setNumero(numero + 1);
    } 

  return(
    <View style={styles.container}>
        <Text style={styles.paragraph}>
            Exemplo 3
        </Text>   

        <TouchableOpacity 
            style={[styles.button]} 
            onPress={() => alert('Olá, mundo!')}
        >
            <Text style={styles.textButton}>
                Diga "Olá, mundo!"
            </Text>
        </TouchableOpacity>          

        <View style={styles.programa}>

            <Text style={styles.textCounter}>{numero}</Text>

            <TouchableOpacity 
                style={[styles.button]} 
                onPress={() => addNumber()}
            >
                <Text style={styles.textButton}>
                    + 1
                </Text>
            </TouchableOpacity>       

        </View>                

    </View>
  );
}