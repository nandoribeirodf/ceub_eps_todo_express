/* global chrome, document */
"use strict";

// Função para carregar tarefas
function loadTasks() {
  chrome.storage.sync.get(['tasks'], function(result) {
    var tasks = result.tasks || [];
    tasks.forEach(function(task) {
      displayTask(task);
    });
  });
}

// Carregar tarefas salvas ao abrir o popup
document.addEventListener('DOMContentLoaded', loadTasks);

// Referências dos elementos do DOM
var taskInput = document.getElementById('task-input');
var taskList = document.getElementById('task-list');
var addTaskButton = document.getElementById('add-task');  // Usar o botão existente

// Adicionar funcionalidade de adicionar tarefa
addTaskButton.addEventListener('click', function() {
  var taskText = taskInput.value.trim();
  if (taskText) {
    var newTask = {
      text: taskText,
      completed: false
    };
    addTask(newTask);
    taskInput.value = '';
  }
});

// Função para adicionar a tarefa na lista e salvar no armazenamento
function addTask(task) {
  displayTask(task);

  // Salvar a tarefa no armazenamento do Chrome
  chrome.storage.sync.get(['tasks'], function(result) {
    var tasks = result.tasks || [];
    tasks.push(task);
    chrome.storage.sync.set({tasks: tasks});
  });
}

// Função para exibir a tarefa na lista
function displayTask(task) {
  var li = document.createElement('li');
  li.textContent = task.text;

  // Checkbox para marcar como concluído
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.addEventListener('change', function() {
    task.completed = checkbox.checked;
    updateTask(task);
  });

  li.prepend(checkbox);
  taskList.appendChild(li);
}

// Referência para o botão "Limpar tarefas concluídas"
var clearTasksButton = document.getElementById('clear-tasks');

// Evento para limpar todas as tarefas concluídas
clearTasksButton.addEventListener('click', function() {
  chrome.storage.sync.get(['tasks'], function(result) {
    var tasks = result.tasks || [];

    // Filtrar as tarefas que ainda não foram concluídas
    var incompleteTasks = tasks.filter(function(task) {
      return !task.completed;
    });

    // Atualizar a lista de tarefas com apenas as incompletas
    chrome.storage.sync.set({tasks: incompleteTasks}, function() {
      // Limpar a lista de tarefas no HTML
      taskList.innerHTML = '';

      // Exibir novamente apenas as tarefas incompletas
      incompleteTasks.forEach(function(task) {
        displayTask(task);
      });
    });
  });
});


// Função para atualizar a tarefa no armazenamento
function updateTask(task) {
  chrome.storage.sync.get(['tasks'], function(result) {
    var tasks = result.tasks || [];
    var taskIndex = tasks.findIndex(function(t) {
      return t.text === task.text;
    });
    if (taskIndex !== -1) {
      tasks[taskIndex] = task;
      chrome.storage.sync.set({tasks: tasks});
    }
  });
}

