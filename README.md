# @adoteiporamor - Sistema de Adoção de Animais

O **@adoteiporamor** é um aplicativo mobile desenvolvido em React Native para gerenciar e facilitar a adoção de animais, conectando de forma prática potenciais adotantes aos pets.

## Estrutura de Telas

O projeto é composto por 4 telas e fluxos principais:

* **Home**: Tela inicial com os destaques e apresentação da plataforma.
* **Lista**: Listagem dinâmica de todos os animais disponíveis.
* **Detalhes**: Informações completas do pet selecionado (porte, idade, descrição e contacto).
* **Registro**: Formulário para o cadastro de novos animais.
* **Perfil dos Animais**: Tela dedicada à exibição dos atributos específicos de cada pet.

## Funcionalidades Técnicas

### CRUD Funcional e Persistência

O aplicativo possui um CRUD funcional integrado com o `AsyncStorage` para armazenamento local e permanente. Os novos pets cadastrados no formulário são inseridos automaticamente no final da lista. O sistema também faz a validação inteligente da espécie (cão ou gato) para aplicar fotos e emojis padronizados de forma automática.

### Sensores Nativos Integrados

Foram implementados 3 sensores essenciais do dispositivo:

1. **GPS**: Para localização e mapeamento dos animais e adotantes.
2. **Imagens**: Integração com a câmara ou galeria para exibição das fotos dos pets.
3. **Rotação (Giroscópio/Acelerómetro)**: Captura a orientação espacial do aparelho para ajustes dinâmicos de layout.

### Componentes e Navegação

**Componentização**: Interface construída com componentes reutilizáveis, destacando-se o
 **Card** (para exibição unificada dos dados do pet na lista) e o 
 **Botão** customizado para ações e formulários.
 **Navegação**: Estruturada através de Stacks de Navegação, permitindo o avanço, retorno de páginas e envio de parâmetros entre rotas. O aplicativo conta ainda com um menu de abas persistente no rodapé (footer) para alternância rápida entre as telas.

## Integrantes do Projeto

* **Luiz Eduardo Lima Coimbra Vinhas** - Matrícula: 01803321
* **Vinícius Costa** - Matrícula: 01796490