// Date playground


const dateArr = []

const dateOne = new Date('March 1 1980 12:00:00')
console.log(dateOne);
const dateOneTS = dateOne.getTime()
const myOtherDate = new Date(dateOneTS)
console.log(myOtherDate.getFullYear());

const dateTwo = new Date('June 2 1967 01:34:54')
console.log(dateTwo);
const dateTwoTS = dateTwo.getTime()
const myDate = new Date(dateTwoTS)
console.log(myDate.getFullYear());

// Sort order of timestamps

let first = (dateTwoTS > dateOneTS) ? dateOne : dateTwo;
console.log(`Oldest Timestamp: ${first}`);




