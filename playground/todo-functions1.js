// Fetch existing todos from localStorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos')
  return (todosJSON !== null) ? JSON.parse(todosJSON) : []
}

// Add todo to array
const addTodo = function (todoText) {
  todos.push({
    text: todoText,
    completed: false
  })
}

// Save todos to localStorage
const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (notComplete) {
  const summary = document.createElement('h2');
  let stat = notComplete.length === 1 ? "todo" : "todos"
  summary.textContent = `You have ${notComplete.length} ${stat} left to complete.`
  document.querySelector('#todos').appendChild(summary);
  return summary
}

// Get the DOM elements for an individual todos
const generateTodoDOM = function (filteredTodos) {
  filteredTodos.forEach(function (todo) {
    const todoEl = document.createElement('p')
    let checked = todo.completed ? "Done" : "Todo";
    todo.text = (todo.text.length > 0) ? todo.text : todo.text = "Todo Item"

    todoEl.textContent = `- ${todo.text} - ${checked}`
    document.querySelector('#todos').appendChild(todoEl);
  })
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    let textSearch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    let completed = !todo.completed
    return (filters.hideCompleted) ? textSearch && completed : textSearch
  })

  const notComplete = filteredTodos.filter(function (todo) {
    return !todo.completed;
  })

  filteredTodos.sort(function (a, b) {
    a = a.completed
    b = b.completed;
    return (a < b) ? -1 : (b < a) ? 1 : 0
  })

  document.querySelector('#todos').innerHTML = ''

  generateSummaryDOM(notComplete)
  generateTodoDOM(filteredTodos)
}


