import { StyleSheet } from 'react-native';  

// npm i react-native-responsive-fontsize
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3F2FD',
        padding: 8, 
        width: '100%', 
        justifyContent: 'center', 
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1565C0', 
    }, 
    image: {
        width: '90%', 
        height: '15%', 
        margin: 10,
    }, 
    nomes: {
        textAlign: 'center', 
        fontSize: RFPercentage(2), 
    } 
});

export default styles;