
import { StyleSheet } from 'react-native'; 

const style = StyleSheet.create({
    body: {
        fontFamily: 'sans-serif',
        margin: 20,
        padding: 0,
    }, 
    h1: {
        marginTop: 0, 
        fontSize: 22,
    }, 
    h2: {
        marginTop: 0,
        fontSize: 20,
    }, 
    h3: {
        marginTop: 0,
        fontSize: 18,
    }, 
    h4: {
        marginTop: 0, 
        fontSize: 16, 
    }, 
    h5: {
        marginTop: 0, 
        fontSize: 14, 
    }, 
    h6: {
        marginTop: 0, 
        fontSize: 12, 
    }, 
    code:  {
        fontSize: 12, 
    }, 
    ul: {
        paddingLeft: 20, 
    }, 
    square: {
        background: '#fff', 
        borderWidth: 1, 
        borderColor: '#999', 
        float: 'left', 
        fontSize: 24,
        fontWeight: 'bold', 
        lineHeight: 34, 
        height: 34, 
        marginRight: -1,
        marginTop: -1,
        padding: 0,
        textAlign: 'center', 
        width: 34,
    }, 
    status: {
        marginBottom: 10,
    }, 
    game: {
        display: 'flex', 
    }, 
    gameInfo:  {
        marginLeft: 20, 
    }, 
    montarJogo: {
        flexDirection: 'row', 
    },  
});

export default style;
