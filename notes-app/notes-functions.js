// Check for existing saved data
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem('notes')
  return (notesJSON !== null) ? JSON.parse(notesJSON) : []
}

// add note to notes array
const addNote = function () {
  const id = uuidv4()
  const timestamp = moment().valueOf()
  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
  })
  return id;
}

// Save notes to local storage
const saveNotes = function (notes) {
  
  localStorage.setItem('notes', JSON.stringify(notes))
}
// Remove a note for the list
const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id
  })
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// Generate the DOM structure for the note
const generateNoteDOM = function (note) {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('a')
  const button = document.createElement('button')

  // Setup the delete button
  button.textContent = 'X'
  noteEl.appendChild(button)
  button.addEventListener('click', function () {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

  // Setup the note title text
  textEl.textContent = (note.title.length > 0) ? note.title : 'Unnamed Note'
  textEl.setAttribute('href', `/edit.html#${note.id}`)
  noteEl.appendChild(textEl)
  return noteEl
}

//Sort notes by 
const sortNotes = function (notes, sortBy) {
  if (sortBy === 'byEdited') {
    return notes.sort(function (a, b) {
        a = a.updatedAt;
        b = b.updatedAt;
        return (a > b) ? -1 : (a < b) ? 1 : 0
    }) 
  } else if (sortBy === 'byCreated') {
      return notes.sort(function (a, b) {
        a = a.createdAt;
        b = b.createdAt;
        return (a > b) ? -1 : (a < b) ? 1 : 0
      })
  } else if (sortBy === 'byAlpha') {
    return notes.sort(function (a, b) {
      a = a.title.toLowerCase();
      b = b.title.toLowerCase();
      return (a < b) ? -1 : (a > b) ? 1 : 0
    })
  }
}

// Render application notes
const renderNotes = function (notes, filters) {
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note)
    document.querySelector('#notes').appendChild(noteEl);
  })
}

// Generate last edited message
const generateLastEdited = function (timestamp) {
  return `Last edited ${moment(timestamp).fromNow()}`
}