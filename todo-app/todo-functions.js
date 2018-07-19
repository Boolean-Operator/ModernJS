'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')
  try {
    return (todosJSON) ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  }
}

const capFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1)

// Add todo to array
const addTodo = (todoText) => {
  capFirst(todoText)
  todos.push({
    id: uuidv4(),
    text: todoText,
    completed: false
  })
}

// Sort array elements to place completed elements at end of array
const sortArray = (a,b) => {
  a = a.completed
  b = b.completed;
  return (a < b) ? -1 : (b < a) ? 1 : 0
}

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
} 

// Remove todo by id
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)
  if (todoIndex > -1) {todos.splice(-1, 1)}
}

// Toggle todo completed value by id
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    let textSearch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    let completed = !todo.completed
    return (filters.hideCompleted) ? textSearch && completed : textSearch
  })
  
  const notCompleted = filteredTodos.filter((todo) => !todo.completed)
    
  document.querySelector('#todos').innerHTML = ''
  document.querySelector('#todos').appendChild(generateSummaryDOM(notCompleted))
  
  filteredTodos.forEach((todo) => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo))
  }) 
}


// Get the DOM elements for an individual todos
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const textEl = document.createElement('span')
  const removeButton = document.createElement('button')
  
  //set up completed checkbox
  checkbox.setAttribute('type', 'checkbox') 
  checkbox.checked = todo.completed
  todoEl.appendChild(checkbox)
  checkbox.addEventListener('change', () => {
    toggleTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  //set up todo item text
  textEl.textContent = `  ${todo.text}   `
  todoEl.appendChild(textEl)
  
  // set up remove todo item button
  removeButton.textContent = 'X'
  todoEl.appendChild(removeButton)
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (notComplete) => {
  const summary = document.createElement('h2');
  let stat = notComplete.length === 1 ? "todo" : "todos"
  summary.textContent = `You have ${notComplete.length} ${stat} left to complete.`
  return summary
}