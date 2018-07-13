const notes = [{
  title: 'Note 1',
  body: 'This is the text for Note 1',
}, {
  title: 'Note 2',
  body: 'This is the note that Krang is putting where the Note 2 body text is going.',
},{
  title: 'Note 3',
  body: 'Do I even have a 3rd note?',
}]

// const findTitle = function (arr, noteTitle) {
  //   const index = arr.findIndex(function (note, index) {
    //     return note.title.toLowerCase() === noteTitle.toLowerCase()
    //   })  
    //   return notes[index]
    // }

const findTitle = function (arr, noteTitle) {
  return arr.find(function (note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })  
}

const findNotes = function (arr, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}

const searchTitle = findTitle(notes, 'note 1')
console.log(`Title: ${searchTitle.title} \n Body: ${searchTitle.body}`);
    
const searchNotes = findNotes(notes, 'note')
console.log(searchNotes);

// console.log(`Found:
// Title: ${searchNotes.title}
// Text:${searchNotes.body}`);

//WTF
let num = 0.1 + 0.2
console.log(num);
num = ((0.1*100)+(0.2*100))/100
console.log(num);

