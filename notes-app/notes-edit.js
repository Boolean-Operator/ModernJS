const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const dateElement = document.querySelector('#last-edited')
const removeButton = document.querySelector('#remove-note')
const homeButton = document.querySelector('#home-note-page')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (note === undefined) { location.assign('/index.html')}

// Assign values to page elements
titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

//Event listener for changes to title
titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

//Event listener for changes to body
bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

homeButton.addEventListener('click', () => location.assign('/index.html'))

removeButton.addEventListener('click', () => {
  removeNote(note.id)  
  saveNotes(notes)
  location.assign('/index.html')
})


// listen for any changes to the stored data and update elements with changes
window.addEventListener('storage', (e) => {
  if (e.key === 'notes')  {
    notes = JSON.parse(e.newValue)
      note = notes.find((note) => note.id === noteId)

    if (note === undefined) { location.assign('/index.html') }

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
  }
})