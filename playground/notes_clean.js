let notes = [{}, {}, {},{
  title: 'Note 1',
  body: 'This is the body for Note 1',
}, {
    title: 'Note 2',
    body: 'This is the note that Krang is putting where the Note 2 body text is going.',
}, 
{},
{
    title: 'Note 3',
    body: 'Do I even have a 3rd note?',
}]

// const findNote = function (arr, noteTitle) {
//   return arr.find(function (note) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })  
// }

// const findNote = function (arr, noteTitle) {
//   const index = arr.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })  
//   return notes[index]
// }



// const note = findNote(notes, 'note 2')
// console.log(`Title: ${note.title} \n Body: ${note.body}`);


// function cleanOutEmptyObjects(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const index = arr.findIndex(function () {
//      Object.keys(arr).length === 0
//     })
//     if (index!==-1) {
//       arr.splice(index, 1)
//     }
//   }
// }


// cleanOutEmptyObjects(notes)
// console.log(notes);


notes = notes.filter(note => Object.keys(note).length !== 0)
console.log(notes);

