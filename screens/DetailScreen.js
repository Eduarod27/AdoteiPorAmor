import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';

export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.placeholderImage}>
        <Text style={{color: '#999'}}>Foto Grande do Pet 🐾</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Conheça seu novo amigo</Text>
        <Text style={styles.description}>
          Aqui aparecerão todos os detalhes do pet que você clicou: 
          história, temperamento, se é vacinado e muito mais!
        </Text>
        
        <Button 
          title="Voltar para a Lista" 
          onPress={() => navigation.goBack()} 
          variant="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  placeholderImage: { 
    width: '100%', height: 300, backgroundColor: '#F2F2F2', 
    justifyContent: 'center', alignItems: 'center' 
  },
  content: { padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  description: { fontSize: 16, color: '#666', lineHeight: 24, marginBottom: 32 }
});