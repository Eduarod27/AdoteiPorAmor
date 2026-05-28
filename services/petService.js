import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@pets';

export async function salvarPets(pets) {

  try {

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(pets)
    );

  } catch (error) {

    console.log('Erro ao salvar pets', error);

  }
}

export async function carregarPets() {

  try {

    const dados = await AsyncStorage.getItem(STORAGE_KEY);

    return dados ? JSON.parse(dados) : [];

  } catch (error) {

    console.log('Erro ao carregar pets', error);

    return [];
  }
}