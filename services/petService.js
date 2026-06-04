import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@pets';

// Salva a lista de pets atualizada no dispositivo
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

// Carrega os pets salvos no dispositivo
export async function carregarPets() {
  try {
    const dados = await AsyncStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : [];
  } catch (error) {
    console.log('Erro ao carregar pets', error);
    return [];
  }
}

// Adiciona um novo pet mantendo os existentes e colocando o novo no topo
export async function adicionarPet(dadosPet) {
  try {
    // 1. Pega os pets que já estão guardados (inclusive os 10 iniciais)
    const petsExistentes = await carregarPets();
    
    // 2. Formata o novo pet com as propriedades que a sua interface espera
    const novoPet = {
      id: Date.now().toString(),
      nome: dadosPet.nome,
      // Garante que 'Cão' vira 'cachorro' ou 'Gato' vira 'gato' para o seu ícone/Card funcionar
      tipo: dadosPet.especie ? dadosPet.especie.toLowerCase().replace('cão', 'cachorro') : 'cachorro',
      idade: dadosPet.idade,
      porte: 'Médio', // Valor padrão temporário
      localizacao: 'Recife', // Valor padrão temporário
      imagem: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600', // Imagem padrão
      descricao: `Contato do tutor: ${dadosPet.contato}`,
      contato: dadosPet.contato
    };

    // 3. Coloca o novo pet na PRIMEIRA posição da lista antiga
    petsExistentes.unshift(novoPet);
    
    // 4. Salva a lista inteira de volta no AsyncStorage
    await salvarPets(petsExistentes);

    return novoPet;
  } catch (error) {
    console.log('Erro ao adicionar o pet', error);
    return null;
  }
}

// Deleta um pet pelo ID
export async function deletarPet(idPet) {
  try {
    const petsExistentes = await carregarPets();

    const listaFiltrada = petsExistentes.filter(pet => pet.id !== idPet);

    await salvarPets(listaFiltrada);

    return listaFiltrada;
  } catch (error) {
    console.log('Erro ao deletar o pet', error);
  }
}