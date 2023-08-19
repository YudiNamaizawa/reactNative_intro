import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#f60', 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%'
    }, 
    texto : {
        color: '#fff', 
        fontSize: 30, 
    },
    botao : {
        margin: 5,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        width: '50%',
        alignItems: 'center',
    },
    txtBotao : {
        color: '#fff',
    },
});

export default styles;