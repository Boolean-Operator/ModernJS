let todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'] 

// console.log(`You have ${todos.length} items in your todo list`);

// console.log(`The first item is - ${todos[0]}`);
// console.log(`The second to last item is -  ${todos[todos.length-2]}`);


// todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'] 
// console.log(todos);
// console.log('-----');

// // Delete 3rd item
// todos.splice(2,1);
// console.log(`You have ${todos.length} items in your todo list`);
// console.log(todos);
// console.log('-----');

// // add new item on end
// todos.push('End item')

// console.log(`You have ${todos.length} items in your todo list`);
// console.log(todos);
// console.log('-----');



// // Remove first item on list
// todos.shift('First item')
// console.log(`You have ${todos.length} items in your todo list`);
// console.log(todos);



console.log(`You have ${todos.length} items in your todo list`);
// console.log(todos);
console.log('-----');

//forEach
todos.forEach(function (item, index) {
  const num = index + 1
  console.log(`${num}. ${item}`);
})

console.log('-----');

// for loop
for (let count = 0; count < todos.length; count++) {
  const num = count +1
  const todo = todos[count]
  console.log(`${num}. ${todo}`);
}

console.log(todos.indexOf('Item 3'));

