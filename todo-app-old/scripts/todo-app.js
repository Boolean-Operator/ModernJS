'use strict'

const todos = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false,
}

renderTodos(todos, filters)

  document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters)
  })
  
  document.querySelector("#add-todo-form").addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.todoText.value.trim()
    if (text !== "") {
      addTodo(text)
      saveTodos(todos)
      renderTodos(todos, filters)
      e.target.elements.todoText.value = ''
    } else {
      console.log("No item entered");
      
    }    
  })

  document.querySelector('#hide-completed').addEventListener('change', (e) => {
    console.log(e.target.checked);
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters)
  })
