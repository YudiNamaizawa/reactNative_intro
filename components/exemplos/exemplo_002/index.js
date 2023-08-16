import { Text, View, Image } from 'react-native';

import styles from './styles';

import logo from '../../assets/002-1-react-native.png';

const Saudacoes = (props) => {
    return(
        <Text style={styles.nomes}>
            Olá {props.name}!
        </Text>
    );
}

function Index() {
    return (
        <View style={styles.container}>
        <Image source={logo} style={styles.image} /> 
        <Text style={styles.paragraph}>
            Exemplo 2
        </Text>

        <Saudacoes name='Mario' />
        <Saudacoes name='Maria' />
        <Saudacoes name='Bruna' />
        <Saudacoes name='Bruno' />                  

        </View>
    );
}

export default Index;