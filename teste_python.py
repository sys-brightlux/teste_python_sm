# --- DADOS DE EXEMPLO ---
# Não altere esta lista
lista_tarefas = [
    {'id': 1, 'titulo': 'Desenvolver tela de login', 'status': 'concluida'},
    {'id': 2, 'titulo': 'Testar API de usuários', 'status': 'pendente'},
    {'id': 3, 'titulo': 'Corrigir bug do relatório', 'status': 'concluida'},
    {'id': 4, 'titulo': 'Documentar funcionalidade X', 'status': 'pendente'},
    {'id': 5, 'titulo': 'Revisar layout', 'status': 'pendente'},
]

def calcular_progresso(tarefas):
    """
    Complete esta função.
    Recebe: uma lista de dicionários (tarefas).
    Retorna: a porcentagem (float) de tarefas com status 'concluida'.
    
    Ex: Se 2 de 5 tarefas estiverem 'concluida', deve retornar 40.0
    """
    
    # TODO: Escreva seu código aqui.
    # Lembre-se de tratar o caso de divisão por zero (lista vazia).
    
    pass


# --- TESTE DA FUNÇÃO ---
# (Você pode adicionar mais testes se quiser)
porcentagem = calcular_progresso(lista_tarefas)

print(f"--- Teste Python ---")
print(f"Dados de exemplo: <quantidade de tarefas> tarefas")
print(f"Progresso: {porcentagem}%")

# --- Resultado esperado ---
#--- Teste Python ---
#Dados de exemplo: 5 tarefas
#Progresso: 40.0%
