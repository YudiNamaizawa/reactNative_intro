import { StyleSheet } from 'react-native'

// npm i react-native-responsive-fontsize
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    display: {
      flex: 1, 
      padding: 20, 
      justifyContent: 'center', 
      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
      alignItems: 'flex-end', 
    }, 
    displayValue: {
      fontSize: RFPercentage(8), 
      color: '#FFF', 
    }, 
  });

  export default styles;