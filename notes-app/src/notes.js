import uuidv4 from './uuidv4.js'
import moment from 'moment'

let notes = []

// Check for existing saved data
const loadNotes = () => {
  const notesJSON = localStorage.getItem('notes')

  try {
    return (notesJSON) ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
}

// Add capitalization to first letter of input string
const capFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1)

// Save notes to local storage
const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Expose notes from module
const getNotes = () => notes

// add note to notes array
const createNote = () => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
      id: id,
      title: '',
      body: '',
      createdAt: timestamp,
      updatedAt: timestamp
    })
    saveNotes()
    return id
}

const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
    saveNotes()
  }
}

//Sort notes by 
const sortNotes = (sortBy) => {
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
  } else {
    return notes
  }
}

const updateNote = (id, updates) => {
  const note = notes.find((note) => note.id === id)

  if (!note) {
    return
  }

  if (typeof updates.title === 'string') {
    updates.title = capFirst(updates.title) 
    note.title = updates.title
    note.updatedAt = moment().valueOf()
  }

  if (typeof updates.body ==='string') {
    note.body = updates.body
    note.updatedAt = moment().valueOf()
  }

  saveNotes()
  return note
}


notes = loadNotes()


export { getNotes, createNote, removeNote, sortNotes, updateNote }