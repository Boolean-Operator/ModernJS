
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
    text: 'Complete Modern JS course',
    completed: false
  }, {
    text: 'Update Portfolio Site',
    completed: true
  }, {
    text: 'Submit resumes to 5 job listing',
    completed: false
  }] 

const sortNotes = function (arr, key) {
  arr.sort(function (a, b) {
     a = a[key].toLowerCase()
     b = b[key].toLowerCase()
    if (a < b) {
      return -1
    } else if (b < a) {
      return 1
    } else {
      return 0
    }
  })
}

const sortByCompletedNotes = function (arr) {
  arr.sort(function (a, b) {
     a = a.completed
     b = b.completed
    if (a < b) {
      return -1
    } else if (b < a) {
      return 1
    }
      return 0
  })
}

const deleteTodo = function(arr, text) {
  const index =  arr.findIndex(function(todo) {
    return todo.text.toLowerCase() === text.toLowerCase()
  })
  console.log(index);
  if(index > -1) {
    arr.splice(index,1)
  }
}

const getThingsToDo = function (arr) {
  return arr.filter(function(note) {
   return !note.completed;
  })
}

// console.log(getThingsToDo(testTodos));
// console.log('-----');

// let toDelete = 'Item 21'
// deleteTodo(testTodos, toDelete)
// console.log(testTodos);
// console.log('-----');

let sortList = otherTodos
sortByCompletedNotes(sortList)
for (let i = 0; i < sortList.length; i++) {
    let num = i + 1
    let checked = sortList[i].completed ? "Done" : "Todo" 
  console.log(`${num}. ${checked} -- ${sortList[i].text}`);
  }
console.log('-----');
  
// let sortList = otherTodos
// let sortKey = 'text'
// sortNotes(sortList, sortKey)
// for (let i = 0; i < sortList.length; i++) {
//   let num = i+1
//   console.log(`${num}. ${sortList[i].text}`);
// }
// console.log('-----');