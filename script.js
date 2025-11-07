// --- DADOS DE EXEMPLO ---
// Não altere esta lista
const listaTarefas = [
    {id: 1, titulo: 'Desenvolver tela de login', status: 'concluida'},
    {id: 2, titulo: 'Testar API de usuários', status: 'pendente'},
    {id: 3, titulo: 'Corrigir bug do relatório', status: 'concluida'},
    {id: 4, titulo: 'Documentar funcionalidade X', status: 'pendente'},
    {id: 5, titulo: 'Revisar layout', status: 'pendente'},
];

// --- SEU CÓDIGO AQUI ---

/**
 * Esta função deve ser chamada para exibir as tarefas no HTML.
 */
function exibirTarefas() {
    
    // TODO: 1. Encontre a <ul> com id="lista-tarefas" no index.html
    const elementoLista = document.getElementById('lista-tarefas');
    
    // (Opcional: Limpar a lista antes de adicionar novos itens)
    // elementoLista.innerHTML = '';

    // TODO: 2. Itere sobre a 'listaTarefas' (usando for, forEach, map, etc.)
    
    // TODO: 3. Para cada tarefa:
    //    a. Crie um novo elemento <li> (ex: document.createElement('li'))
    //    b. Defina o texto do <li> (ex: "[pendente] Testar API de usuários")
    //    c. Adicione a classe CSS correta ao <li> ('concluida' ou 'pendente')
    //    d. Adicione o <li> à <ul> (elementoLista) no DOM
    
}


// --- EXECUTA A FUNÇÃO ---
// Chama a função para exibir as tarefas quando o script carregar
exibirTarefas();