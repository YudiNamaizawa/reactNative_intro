import { StyleSheet } from 'react-native';  

// npm i react-native-responsive-fontsize
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    nomes: {
        textAlign: 'center', 
        color: '#1565C0', 
        fontSize: RFPercentage(2), 
        padding: 6,
    } 
});

export default styles;