import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ListScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pets Disponíveis 🐶🐱</Text>
      <Text style={styles.subtitle}>Em breve, nossa lista completa de amigos aqui!</Text>
      
      <Button 
        title="Ver Detalhes do Pet" 
        onPress={() => navigation.navigate('Detalhes')} 
        color="#4D96FF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA'
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
  }
});