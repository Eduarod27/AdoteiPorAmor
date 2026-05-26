import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder}>
          <Text style={{fontSize: 40}}>👤</Text>
        </View>
        <Text style={styles.userName}>Luiz Silva</Text>
        <Text style={styles.userLocation}>📍 Recife, PE</Text>
      </View>

      <View style={styles.actions}>
        <Button 
          title="Tirar Foto de Perfil" 
          onPress={() => alert('Câmera abrirá em breve!')} 
          variant="primary"
        />
        <Button 
          title="Atualizar Localização (GPS)" 
          onPress={() => alert('GPS buscará localização em breve!')} 
          variant="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 24 },
  profileHeader: { alignItems: 'center', marginTop: 40, marginBottom: 40 },
  avatarPlaceholder: { 
    width: 120, height: 120, borderRadius: 60, backgroundColor: '#F2F2F2',
    justifyContent: 'center', alignItems: 'center', marginBottom: 16,
    borderWidth: 2, borderColor: '#FF6B6B'
  },
  userName: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  userLocation: { fontSize: 14, color: '#999', marginTop: 4 },
  actions: { width: '100%' }
});