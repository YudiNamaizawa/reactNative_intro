import React, { useState } from 'react'; 
import { Text, View, FlatList, Alert, Platform, Modal } from 'react-native'; 
// npm i react-native-uuid
import uuid from 'react-native-uuid';

import styles from './styles';

import Header from './header'; 
import ListItem from './listItem'; 
import AddItem from './addItem'; 
import AtlzItem from './atualizaItem'; 

//console.log(uuid.v4());

export default function Index() {   

  const [items, setItems] = useState(
      [
        {id : uuid.v4(), text : "Leite"}, 
        {id : uuid.v4(), text : "Ovos"}, 
        {id : uuid.v4(), text : "Farinha"}, 
        {id : uuid.v4(), text : "Baunilha"}, 
        {id : uuid.v4(), text : "Fermento"}, 
      ]
    ); 

    const [atualiza, setAtualiza] = useState(false); // atualizar tela
    const [lista, setLista] = useState(true); // mostra lista ou edita item 
    const [modalVisible, setModalVisible] = useState(false); 
    const [itemAtualizar, setItemAtualizar] = useState({});

  /*const [pessoa, setPessoa] = useState(
    {"nome" : "Zé", "nascimento" : "10/08/2008", "cidade" : "Tupã"}
    );
  const [pessoas, setPessoas] = useState([
    {"nome" : "Zé", "nascimento" : "10/08/2008", "cidade" : "Tupã"}, 
    {"nome" : "Antônio", "nascimento" : "01/10/2008", "cidade" : "Tupã"}, 
    {"nome" : "Maria", "nascimento" : "10/09/2010", "cidade" : "Tupã"}, 
    {"nome" : "Ana", "nascimento" : "20/11/2000", "cidade" : "Tupã"}, 
  ]);
*/
  //console.log(pessoa);
  //console.log('Nome do cara: ' + pessoa.nome);

  //console.log(pessoas);
  //console.log('Nome do cara: ' + pessoas[2].nome);

  //console.log(items); 

  function deleteItem (id) {
    setItems( prevItems => {
      return prevItems.filter( item => item.id != id); 
    }); 
  }

  function addItem (text) {
    if (text === '') {
      if (Platform.OS === 'web') {
        alert('O valor do item não pode ser vazio');
      } else {
        Alert.alert('Erro', 'O valor do item não pode ser vazio', [{text: 'Ok'}]);
      }
    } else {
      /*setItems(prevItems => {
        return [{id: uuid.v4(), text}, ...prevItems];
      });*/
      let dadosTemp = items;
      dadosTemp.push(
        {
          id : uuid.v4(), 
          text
        }
      );
      setItems(dadosTemp);
      setAtualiza(atualiza === false ? true : false);
    }   
  }
  
  function atualizaItem(id, valorNovo) {
    let dadosTemp = items;
    const posicaoAtualizar = dadosTemp.find((item) => {
      return item.id === id;
    }); 
    posicaoAtualizar.text = valorNovo;
    setItems(dadosTemp);     
    //setAtualiza(atualiza === false ? true : false);    
    exibeAtualizaItem({});
  }

  function exibeAtualizaItem(itemAt) {
    setItemAtualizar(itemAt);
    setModalVisible(modalVisible === false ? true : false);
  }
  //console.log(atualiza);
  //console.log(items);

  return (
    <View style={styles.container}>
      <Modal        
        transparent={true}
        visible={modalVisible} 
      >
        <AtlzItem atualizaItem={atualizaItem} itemAtualizar={itemAtualizar} />
      </Modal>
      <Text style={styles.paragraph}>
        Exemplo 8
      </Text>
      <Header /> 
      <AddItem addItem={addItem} />
      <FlatList
        data={items} 
        renderItem={ ({item}) => <ListItem item={item} deleteItem={deleteItem} exibeAtualizaItem={exibeAtualizaItem} />}
      />
    </View>
  );
}

