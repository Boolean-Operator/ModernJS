const notes = [{
  title: 'Update Profile page',
  body: 'This is the text for Note 1',
}, {
  title: 'Move to new Office',
  body: 'This is the note that Krang is putting where the Note 2 body text is going.',
}, {
  title: 'Finish office floors',
  body: 'Do I even have a 3rd note?',
}]

// Display search results 
const filters = {
  searchText: ''
}

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())

  })
  document.querySelector('#notes').innerHTML = ''

  let num = 0
  filteredNotes.forEach(function (note) {
    num = num + 1
    const noteEl = document.createElement('p')
    noteEl.textContent = `${num}. ${note.title} - ${note.body}`
    document.querySelector('#notes').appendChild(noteEl);
  })
  
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
  console.log('Testing 123');
  console.log(event);
  
});

document.querySelector('#search-text').addEventListener('input', function(event) {
  filters.searchText = event.target.value;
  renderNotes(notes, filters)
  
})

document.querySelector('#name-form').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e.target.elements.firstName.value)
  e.target.elements.firstName.value =''
})