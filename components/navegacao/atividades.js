import { View, Text, TouchableOpacity} from 'react-native';

// importa arquivo de estilização
import styles from './exemplosStyles';


// definição das funções dos componentes
function Atividades({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto} >
                Atividades...
            </Text>

            <TouchableOpacity
                onPress= {() => navigation.navigate('Atv1')}
                style={styles.botao}
            >
            <Text style={styles.txtBotao}>Atividade 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress= {() => navigation.navigate('Atv2')}
                style={styles.botao}
            >
            <Text style={styles.txtBotao}>Atividade 2</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress= {() => navigation.navigate('Atv3')}
                style={styles.botao}
            >
            <Text style={styles.txtBotao}>Atividade 3</Text>
            </TouchableOpacity>

        </View>
    );
}

// definição da função padrão que será exportada (nem sempre é necessário)
export default Atividades;