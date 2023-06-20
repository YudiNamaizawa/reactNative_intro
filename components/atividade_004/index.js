import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

function Index() {

    const [nome, setNome] = useState(''); 
    const [sobrenome, setSobreNome] = useState(''); 
    const [nomeComp, setNomeComp] = useState('Exibir o nome e o sobrenome');

    function nomeCompleto() {
        setNomeComp(nome + ' ' + sobrenome); 
        setNome(''); 
        setSobreNome('');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Exemplo 4</Text>

            <Text style={styles.txtSaida}>{nomeComp}</Text>

            <Text style={styles.caption}>Nome</Text>
            <TextInput 
                style={[styles.txtEntrada, {marginBottom: 10}]} 
                onChangeText={(nome) => setNome(nome)} 
                value={nome} 
            />

            <Text style={styles.caption}>Sobrenome</Text>
            <TextInput 
                style={styles.txtEntrada} 
                onChangeText={(sobrenome) => setSobreNome(sobrenome)} 
                value={sobrenome} 
            />

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => nomeCompleto()}
            >
                <Text style={styles.textButton}>Exibir nome completo</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Index;