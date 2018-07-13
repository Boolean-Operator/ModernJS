let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}


let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function (book) {
  return {
    summary: `${book.title} by this ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
  }

  // console.log(`${book.title} by ${book.author}.`);
  
}

let mySummary = getSummary(myBook)
let otherSummary = getSummary(otherBook)

console.log(mySummary.pageCountSummary);

// Challenge Area
// create function - take fahrenheit in - return object with fahr, celc and kelvin


function tempConvert(fahr) {
 let cels = (fahr-32) * (5/9)
 let kelv = cels + 273.15
 let tempObj = {
   fahr: fahr,
   cels: cels,
   kelv: kelv
 }
 return tempObj
}

let resp = tempConvert(32)
let readableResp = `Fahrenheit is ${resp.fahr} degrees.  This converts to ${resp.cels} degrees Celsius and ${resp.kelv} degrees Kelvin.`
console.log(readableResp);

