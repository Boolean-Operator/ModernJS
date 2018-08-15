import { getFilters } from './filters.js'
import { saveTodos, getTodos, removeTodo, toggleTodo } from './todos.js' 


// renderTodos, Args: none, RV: none
// Render application todos based on filters
const renderTodos = () => {
  const todoEl = document.querySelector('#todos')
  const filters = getFilters()
  const todos = getTodos()
  const filteredTodos = todos.filter((todo) => {
    let textSearch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    let completed = !todo.completed
    return (filters.hideCompleted) ? textSearch && completed : textSearch
  })

  const notCompleted = filteredTodos.filter((todo) => !todo.completed)

  todoEl.innerHTML = ''
  todoEl.appendChild(generateSummaryDOM(notCompleted))

  // Handle empty filter results
  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      todoEl.appendChild(generateTodoDOM(todo))
    })
  } else {
    const messageEl = document.createElement('p')
    messageEl.classList.add('empty-message')
    messageEl.textContent = "No to-dos to show"
    todoEl.appendChild(messageEl)
  }
}


// generateTodoDOM, Args: todo, RV: the todo element
// Get the DOM elements for an individual todos
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const textEl = document.createElement('span')
  const removeButton = document.createElement('button')

  //set up todo checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed
  containerEl.appendChild(checkbox)
  checkbox.addEventListener('change', () => {
    toggleTodo(todo.id)
    saveTodos()
    renderTodos()
  })

  //set up todo item text
  textEl.textContent = todo.text
  containerEl.appendChild(textEl)

  // Setup container
  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)

  // set up remove todo item button
  removeButton.textContent = 'Remove'
  removeButton.classList.add('button', 'button--text')
  todoEl.appendChild(removeButton)
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id)
    saveTodos()
    renderTodos()
  })
  return todoEl
}


// generateSummaryDOM, Args: incompletedTodos, RV: the summary element
// Get the DOM elements for list summary
const generateSummaryDOM = (notComplete) => {
  const summary = document.createElement('h2');
  summary.classList.add('list-title')
  const plural = notComplete.length === 1 ? "" : "s"
  summary.textContent = `You have ${notComplete.length} todo${plural} left to complete.`
  return summary
}

// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM }