import { View, Text, TouchableOpacity} from 'react-native';

// importa arquivo de estilização
import styles from './exemplosStyles';


// definição das funções dos componentes
function Exemplos({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto} >
                Exemplos...
            </Text>

            <TouchableOpacity
                onPress= {() => navigation.navigate('Ex1')}
                style={styles.botao}
            >
            <Text style={styles.txtBotao}>Exemplo 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress= {() => navigation.navigate('Ex2')}
                style={styles.botao}
            >
            <Text style={styles.txtBotao}>Exemplo 2</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress= {() => navigation.navigate('Ex3')}
                style={styles.botao}
            >
            <Text style={styles.txtBotao}>Exemplo 3</Text>
            </TouchableOpacity>

        </View>
    );
}

// definição da função padrão que será exportada (nem sempre é necessário)
export default Exemplos;