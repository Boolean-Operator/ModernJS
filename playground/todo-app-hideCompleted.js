let testTodos = [{
    text: 'Item 1',
    completed: false
  }, {
    text: 'Item 2',
    completed: true
  }, {
    text: 'Item 3',
    completed: true
  }, {
    text: 'Item 4',
    completed: true
  }, {
    text: 'Item 5',
    completed: false
}]

let otherTodos = [{
  text: 'Buy catfood',
  completed: true
}, {
  text: 'Pay electric bill',
  completed: false
}, {
  text: 'Complete Modern JS courses',
  completed: false
}, {
  text: 'Updates to Portfolio Site',
  completed: true
}, {
  text: 'Submit resumes to 5 job listing',
  completed: false
  }] 

const todos = otherTodos;
const filters = {
  searchText: '',
  showCompleted: false
}

const renderTodos = function (todos,filters) {
  const filteredTodos = todos.filter(function (todo) {
    let textSearch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    let notCompleted = !todo.completed
    return (filters.showCompleted) ? textSearch : textSearch && notCompleted
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

  const summary = document.createElement('h2');
  let stat = notComplete.length === 1 ? "todo": "todos"
  summary.textContent = `You have ${notComplete.length} ${stat} left to complete.`
  document.querySelector('#todos').appendChild(summary);

  filteredTodos.forEach(function (todo) {
    const todoEl = document.createElement('p')
    let checked = todo.completed ? "Done" : "Todo";
    todoEl.textContent = `- ${todo.text} - ${checked}`
    document.querySelector('#todos').appendChild(todoEl);
  })
}

const addTodo = function (todoText) {
  todos.unshift({
    text: todoText,
    completed: false
  })
}

renderTodos(todos, filters)

  document.querySelector('#search-text').addEventListener('input', function (event) {
    filters.searchText = event.target.value;
    renderTodos(todos, filters)
  })
  
  document.querySelector("#add-todo-form").addEventListener('submit', function (e) {
    e.preventDefault()
    addTodo(e.target.elements.todoText.value)
    console.log(e.target.elements.todoText.value)
    e.target.elements.todoText.value = ''
    renderTodos(todos, filters)
  })

  document.querySelector('#hide-completed').addEventListener('change', function (e) {
    console.log(e.target.checked);
    filters.showCompleted = e.target.checked;
    renderTodos(todos, filters)
  })
