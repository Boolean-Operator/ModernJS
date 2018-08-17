import uuidv4 from './uuid.js'
import moment from 'moment'

// Setup the empty todos array
let todos = []

// loadTodos, Args: none, RV: none
const loadTodos = () => {
  const todosJSON = localStorage.getItem('todos')
  try {
    todos = todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    todos = []
  }
}

// Add capitalization to first letter of input string
const capFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1)

// saveTodos, Args: none, RV: none
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos, Args: none, RV: todos array
const getTodos = () => todos

// createTodo, Args: todo text, RV: none
const createTodo = (text) => {
  text = capFirst(text)
  const id = uuidv4()
  todos.push({
    id: id,
    text: text,
    createdAt: moment().valueOf(),
    completed: false
  })
  saveTodos()
}

// removeTodo, Args: id of todo to remove, RV: none
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
    saveTodos()
  }
}

// toggleTodo, Args: id of todo to toggle, RV: none
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed
  saveTodos()
}

// Call loadTodos 
loadTodos()

// Setup the exports
export { getTodos, createTodo, removeTodo, toggleTodo } 