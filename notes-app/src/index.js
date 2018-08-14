import { createNote } from './notes.js'
import { setFilters } from './filters.js'
import { renderNotes } from './views.js'

renderNotes()

document.querySelector('#create-note').addEventListener('click', (e) => {
  const id = createNote()
  location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value
  })
  
  renderNotes()

})
document.querySelector('#filter-by').addEventListener('change', (e) => {
  setFilters({
    sortBy: e.target.value
  })

  renderNotes()
})

self.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    renderNotes()
  }
})



