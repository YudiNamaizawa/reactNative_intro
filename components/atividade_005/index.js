import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Index() {

    const [n1, setN1] = useState('');  
    const [n2, setN2] = useState('');  
    const [total, setTotal] = useState(0); 

    function Calcular(operacao) {

        let resultado = 0;

        if (operacao === '+') {
            resultado = parseInt(n1) + parseInt(n2); 
        } else if (operacao === '-') {
            resultado = parseInt(n1) - parseInt(n2); 
        } else if (operacao === 'x') {
            resultado = parseInt(n1) * parseInt(n2); 
        } else if (operacao === '÷') {
            resultado = parseInt(n1) / parseInt(n2); 
        } else {
            resultado = 'Falha na operação';
        } 

        if (isNaN(resultado)) resultado = 'Insira valores numéricos!';
        

        setTotal(resultado.toFixed(2).toString());
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

            <View style={styles.containerBotoes}>

                <TouchableOpacity
                    onPress={() => Calcular('+')}
                    style={styles.button} 
                >
                    <Text style={styles.textButton}> + </Text>
                </TouchableOpacity>    

                <TouchableOpacity
                    onPress={() => Calcular('-')}
                    style={styles.button} 
                >
                    <Text style={styles.textButton}> - </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Calcular('x')}
                    style={styles.button} 
                >
                    <Text style={styles.textButton}> x </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Calcular('÷')}
                    style={styles.button} 
                >
                    <Text style={styles.textButton}> ÷ </Text>
                </TouchableOpacity>

            </View>   

        </View>    

    );
}