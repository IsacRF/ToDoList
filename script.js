// Selecionando os elementos do DOM
const taskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value;  // Obtém o texto da nova tarefa

    if (taskText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    const newTask = document.createElement('li');  // Cria um novo item da lista
    newTask.textContent = taskText;  // Define o texto da nova tarefa
    taskList.appendChild(newTask);   // Adiciona o novo item à lista de tarefas

    taskInput.value = '';  // Limpa o campo de entrada
}

// Adiciona um evento de clique ao botão
addButton.addEventListener('click', addTask);