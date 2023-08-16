import { View, Text } from 'react-native';

// importa arquivo de estilização
import styles from './styles';

// definição das funções dos componentes
function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto} >
                Introdução React Native
            </Text>
        </View>
    );
}

// definição da função padrão que será exportada (nem sempre é necessário)
export default Index;