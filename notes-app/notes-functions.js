'use strict'


// Check for existing saved data
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')

  try {
    return (notesJSON) ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }


}

// add note to notes array
const addNote = () => {
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
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}
// Remove a note for the list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// Generate the DOM structure for the note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('a')
  const button = document.createElement('button')

  // Setup the delete button
  button.textContent = 'X'
  noteEl.appendChild(button)
  button.addEventListener('click', () => {
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
const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
        a = a.updatedAt;
        b = b.updatedAt;
        return (a > b) ? -1 : (a < b) ? 1 : 0
    }) 
  } else if (sortBy === 'byCreated') {
      return notes.sort((a, b) => {
        a = a.createdAt;
        b = b.createdAt;
        return (a > b) ? -1 : (a < b) ? 1 : 0
      })
  } else if (sortBy === 'byAlpha') {
    return notes.sort((a, b) => {
      a = a.title.toLowerCase();
      b = b.title.toLowerCase();
      return (a < b) ? -1 : (a > b) ? 1 : 0
    })
  }
}

// Render application notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note)
    document.querySelector('#notes').appendChild(noteEl);
  })
}

// Generate last edited message
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`
}