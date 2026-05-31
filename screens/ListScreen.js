import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import { FlatList } from 'react-native-gesture-handler';

export default function ListScreen({ navigation }) {


  const PETS_ESTATICOS = [
    { id: '1', nome: 'Pipoca', tipo: 'cachorro', idade: '2 anos', porte: 'Pequeno', localizacao: 'Boa Viagem, Recife', imagem: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600', descricao: 'A Pipoca é super dócil, ama brincar com crianças e já está vacinada e vermifugada. Perfeita para apartamento!' },
    { id: '2', nome: 'Mingau', tipo: 'gato', idade: '1 ano', porte: 'Médio', localizacao: 'Casa Caiada, Olinda', imagem: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600', descricao: 'Mingau é um gatinho calmo, companheiro e adora tirar um cochilo no sol. Já usa a caixa de areia perfeitamente.' },
    { id: '3', nome: 'Mel', tipo: 'cachorro', idade: '3 anos', porte: 'Médio', localizacao: 'Espinheiro, Recife', imagem: 'https://images.unsplash.com/photo-1537151625747-7ae87041ee99?w=600', descricao: 'Mel é super carinhosa, cheia de energia e se dá muito bem com outros cães. Ama passear no parque!' },
    { id: '4', nome: 'Simba', tipo: 'gato', idade: '6 meses', porte: 'Pequeno', localizacao: 'Bairro Novo, Olinda', imagem: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600', descricao: 'Simba é um filhotinho curioso e brincalhão. Muito ativo, vai encher sua casa de alegria e energia!' },
    { id: '5', nome: 'Thor', tipo: 'cachorro', idade: '4 anos', porte: 'Grande', localizacao: 'Madalena, Recife', imagem: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600', descricao: 'Thor é um excelente cão de guarda e incrivelmente leal à família. Precisa de espaço para correr e gastar energia.' },
    { id: '6', nome: 'Luna', tipo: 'cachorro', idade: '1 ano', porte: 'Pequeno', localizacao: 'Graças, Recife', imagem: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600', descricao: 'Luna é uma cachorrinha tímida no começo, mas extremamente amorosa quando ganha confiança. Muito silenciosa.' },
    { id: '7', nome: 'Oliver', tipo: 'gato', idade: '2 anos', porte: 'Médio', localizacao: 'Jardim Atlântico, Olinda', imagem: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600', descricao: 'Oliver é um gato independente, charmoso e muito limpo. Adora brinquedos de arranhar e caçar bolinhas.' },
    { id: '8', nome: 'Amora', tipo: 'cachorro', idade: '5 anos', porte: 'Médio', localizacao: 'Parnamirim, Recife', imagem: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600', descricao: 'Amora é madura, obediente e super tranquila. Ideal para quem busca um pet calmo para fazer companhia no dia a dia.' },
    { id: '9', nome: 'Garfield', tipo: 'gato', idade: '3 anos', porte: 'Grande', localizacao: 'Torre, Recife', imagem: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600', descricao: 'Garfield é um gatão robusto, super manso e preguiçoso. O companheiro perfeito para maratonar séries no sofá.' },
    { id: '10', nome: 'Apolo', tipo: 'cachorro', idade: '2 anos', porte: 'Grande', localizacao: 'Imbiribeira, Recife', imagem: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?w=600', descricao: 'Apolo é gigante no tamanho e no amor. Extremamente dócil com crianças e protetor com quem ama.' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pets Disponíveis 🐶🐱</Text>
      <FlatList
        data={PETS_ESTATICOS}
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
    paddingHorizontal: 20
  },
  listaContainer: {
    paddingBottom: 20
  }
});