import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { FlatList } from 'react-native-gesture-handler';

// Importando as funções do seu petService
import { carregarPets, salvarPets } from '../services/petService';

// Seus mesmos pets estáticos para servirem de base inicial
const PETS_INICIAIS = [
  { id: '1', nome: 'Pipoca', tipo: 'cachorro', idade: '2 anos', porte: 'Pequeno', localizacao: 'Boa Viagem, Recife', imagem: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600', descricao: 'A Pipoca é super dócil...' },
  { id: '2', nome: 'Mingau', tipo: 'gato', idade: '1 ano', porte: 'Médio', localizacao: 'Casa Caiada, Olinda', imagem: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600', descricao: 'Mingau é um gatinho calmo...' },
  { id: '9', nome: 'Garfield', tipo: 'gato', idade: '3 anos', porte: 'Grande', localizacao: 'Torre, Recife', imagem: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600', descricao: 'Garfield é um gatão robusto...' },
  { id: '10', nome: 'Apolo', tipo: 'cachorro', idade: '2 anos', porte: 'Grande', localizacao: 'Imbiribeira, Recife', imagem: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?w=600', descricao: 'Apolo é gigante no tamanho...' }
];

export default function ListScreen({ navigation }) {
  const [pets, setPets] = useState([]);

  // Função que busca do AsyncStorage
  const atualizarLista = async () => {
    let petsDoStorage = await carregarPets();
    
    // Se for a primeira vez abrindo o app e não tiver nada salvo, popula com os iniciais
    if (petsDoStorage.length === 0) {
      await salvarPets(PETS_INICIAIS);
      petsDoStorage = PETS_INICIAIS;
    }
    
    setPets(petsDoStorage);
  };

  // Escuta quando a tela ganha foco (vinda do goBack) e atualiza os dados
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      atualizarLista();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pets Disponíveis 🐶🐱</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}  
        contentContainerStyle={styles.listaContainer}
        renderItem={({ item }) => (
          <Card
            pet={item}
            onPress={() => navigation.navigate('Detalhes', { petSelecionado: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', 
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8
  },
  listaContainer: {
    paddingBottom: 20
  }
});