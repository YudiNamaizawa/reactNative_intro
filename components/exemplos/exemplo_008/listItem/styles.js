import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    padding: 15, 
    backgroundColor: '#B3E5FC', 
    borderBottomWidth: 1, 
    borderColor: '#81D4FA', 
  },
  listItemView: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  }, 
  listItemText: {
    fontSize: 18, 
    color: '#01579B', 
  }, 
  pItem: {
    flexDirection: 'row', 
  }
});

export default styles;