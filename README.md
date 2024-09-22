# To-Do Express

To-Do Express é uma extensão simples e eficiente para Google Chrome, projetada para facilitar o gerenciamento rápido de tarefas diretamente no navegador.

## Funcionalidades

- Adicionar Tarefa: Insira rapidamente uma nova tarefa através do campo de texto e o botão "Adicionar".
- Listar Tarefas: Veja todas as suas tarefas em uma lista clara e organizada.
- Marcar Tarefas como Concluídas: Use a caixa de seleção para marcar uma tarefa como concluída.
- Limpar Tarefas Concluídas: Remova todas as tarefas que foram marcadas como concluídas com um único clique.
- Persistência: As tarefas são salvas utilizando a API de armazenamento do Chrome, mantendo-as entre sessões de navegação.

## Estrutura do Projeto

- popup.html: Define a interface da extensão, contendo a entrada de texto e a lista de tarefas.
- styles.css: Responsável por estilizar a interface, garantindo um design simples e funcional.
- popup.js: Lógica principal da extensão, manipulando a adição, exibição, atualização e remoção de tarefas.
- manifest.json: Define a configuração da extensão, incluindo permissões e informações básicas.

## Como Usar

1. Abra a extensão no seu navegador.
2. Adicione uma nova tarefa no campo de texto e clique no botão "Adicionar".
3. Marque as tarefas como concluídas à medida que forem finalizadas.
4. Utilize o botão "Limpar Tarefas Concluídas" para remover as tarefas finalizadas da lista.

## Requisitos

- Google Chrome (ou qualquer navegador compatível com extensões baseadas em WebExtensions)
- API de armazenamento do Chrome ativada.