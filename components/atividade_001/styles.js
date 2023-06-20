import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#f60', 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%'
    }, 
    titulo : {
        color: '#fff', 
        fontSize: 60, 
        textAlign: 'center', 
        margin: 10, 
        marginBottom: 40,
    }, 
    texto : {
        color: '#fff', 
        fontSize: 30, 
    },
    legenda : {
        color: '#fff', 
        fontSize: 15, 
        marginTop: 40, 
        textAlign: 'right', 
        width: '100%', 
        marginRight: 40,
    },        
});

export default styles;