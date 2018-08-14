import moment from 'moment'
import { getFilters } from './filters.js';
import { sortNotes, getNotes } from './notes.js'

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


// Render notes to DOM
const renderNotes = () => {
  const notesEl = document.querySelector('#notes')
  const filters = getFilters()
  const notes = sortNotes(filters.sortBy)
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


const initializeEditPage = (noteId) => {
  const titleElement = document.querySelector('#note-title')
  const bodyElement = document.querySelector('#note-body')
  const dateElement = document.querySelector('#last-edited')
  
  const notes = getNotes()
  const note = notes.find((note) => note.id === noteId)

  if (!note) {
    location.assign('/index.html')
  }

  // Assign values to page elements
  titleElement.value = note.title
  bodyElement.value = note.body
  dateElement.textContent = generateLastEdited(note.updatedAt)
}

// Generate last edited message
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`
}

export { generateNoteDOM, renderNotes, initializeEditPage, generateLastEdited }