import { initializeEditPage, generateLastEdited } from './views.js'
import { updateNote, removeNote } from './notes.js'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const dateElement = document.querySelector('#last-edited')
const removeButton = document.querySelector('#remove-note')
const homeButton = document.querySelector('#home-note-page')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)


//Event listener for changes to title
titleElement.addEventListener('input', (e) => {
  const note = updateNote(noteId, {
    title: e.target.value
  })
  dateElement.textContent = generateLastEdited(note.updatedAt)
})

//Event listener for changes to body
bodyElement.addEventListener('input', (e) => {
  const note = updateNote( noteId, {
    body: e.target.value
  })
  dateElement.textContent = generateLastEdited(note.updatedAt)
})

homeButton.addEventListener('click', () => location.assign('/index.html'))

removeButton.addEventListener('click', () => {
  removeNote(noteId)
  location.assign('/index.html')
})


// listen for any changes to the stored data and update elements with changes
window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
   initializeEditPage(noteId)
  }
})
