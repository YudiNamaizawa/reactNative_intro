import { Text } from 'react-native';

import styles from './styles_saudacoes';


const Saudacoes = (props) => {
    return(
        <Text style={styles.nomes}>
            Olá {props.name}!
        </Text>
    );
}

export default Saudacoes;