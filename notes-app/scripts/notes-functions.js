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
  const noteEl = document.createElement('a')
  const textEl = document.createElement('p')
  const statusEl = document.createElement('p')

  // Setup the note title text
  textEl.textContent = (note.title.length > 0) ? note.title : 'Unnamed Note'
  textEl.classList.add('list-item__title')
  noteEl.appendChild(textEl)
  
  // Setup the link
  noteEl.setAttribute('href', `/edit.html#${note.id}`)
  noteEl.classList.add('list-item')

  // setup the status message
  statusEl.textContent = generateLastEdited(note.updatedAt)
  statusEl.classList.add('list-item__subtitle')
  noteEl.appendChild(statusEl)
  
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
  const notesEl = document.querySelector('#notes')
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  notesEl.innerHTML = ''

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNoteDOM(note)
      notesEl.appendChild(noteEl);
    })
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = `Click 'Create Note' your first note to get started.`
    emptyMessage.classList.add('empty-message')
    notesEl.appendChild(emptyMessage)
  }
}

// Generate last edited message
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`
}