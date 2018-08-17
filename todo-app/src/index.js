// Set up index.html to load the bundle
// Make sure to load uuid 

// Add necessary imports
import { setFilters } from './filters.js'
import { createTodo } from './todos.js'
import { renderTodos} from './views.js'

// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector('#search-text').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value
  })
  renderTodos()
})

// Set up form submission handler
document.querySelector("#add-todo-form").addEventListener('submit', (e) => {
  e.preventDefault()
  const text = e.target.elements.todoText.value.trim()
  if (text !== "") {
    createTodo(text)
    renderTodos()
    e.target.elements.todoText.value = ''
  } else {
    console.log("No item entered");
    
  }
})

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
  setFilters({
    hideCompleted: e.target.checked
  })
  renderTodos()
})

// Sort by function
// Add multiple lists
// Add list item sort feature
// Mutate into a printable grocery-pantry list
