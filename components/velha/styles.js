
import { StyleSheet } from 'react-native'; 

const style = StyleSheet.create({
    square: {
        background: '#fff', 
        borderWidth: 1, 
        borderColor: '#999',                 
        fontWeight: 'bold',         
        height: 64,         
        width: 64, 
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
    mensagem: {
        fontSize: 34,
    },  
    status: {
        marginBottom: 20, 
        fontSize: 34, 
    }, 
    game: {
        display: 'flex', 
    }, 
    gameBoard: {
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '50%',
    },     
    boardRow: {
        flexDirection: 'row', 
    },  
    historico: {
        fontSize: 18,
    }, 
    containerHistorico: {
        justifyContent: 'center', 
        alignItems: 'center' ,
        height: '50%'
    }
});

export default style;
