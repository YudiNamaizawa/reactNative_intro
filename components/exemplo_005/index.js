import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Index() {

    const [n1, setN1] = useState(0);  
    const [n2, setN2] = useState(0);  
    const [total, setTotal] = useState(0); 

    function Soma() {
        const conta = parseInt(n1) + parseInt(n2);    
        setTotal(conta.toString());
    } 

    return (

        <View style={styles.container}>
            <Text style={styles.paragraph}> Exemplo 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text> 

            <Text style={styles.textLabel}> 1º número </Text>
            <TextInput 
                style={styles.txtEntrada} 
                onChangeText={ (entrada) => setN1(entrada) } 
                value={n1.toString()}
            /> 

            <Text style={styles.txtSaida}> + </Text> 

            <Text style={styles.textLabel}> 2º número </Text>
            <TextInput 
                style={styles.txtEntrada} 
                onChangeText={ (entrada) => setN2(entrada) } 
                value={n2.toString()}        
            />

            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text> 

            <Text style={styles.textLabel}> Total </Text>
            <TextInput 
                style={styles.txtEntrada} 
                editable={false} 
                value={total.toString()}
            />      

            <TouchableOpacity
                onPress={() => Soma()}
                style={styles.button} 
            >
                <Text style={styles.textButton}> + </Text>
            </TouchableOpacity>       

        </View>    

    );
}