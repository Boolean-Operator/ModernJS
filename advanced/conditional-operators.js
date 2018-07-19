// const myAge = 52
// const message = myAge >= 18 ? 'You can vote, please do.' : 'You cannot vote, yet'
// console.log(message);


//Drink page
const myAge = 20
const showPage = () => {
  return 'Show drink page'
}
const showErrorPage = () => {
  return 'Show error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message);


//Team size Message
const team1 = ['Mike', 'Bill','Frank']
const team2 = ['Kami', 'Mark', 'John', 'Coleen', 'Logan']

const correctTeam = (arr) => {
  return `Team size: ${arr.length}`
}
const tooMany = () => {
  return `Too many people on your team`
}

const teamMessage = (team) => {
  return team.length <= 4 ? correctTeam(team) : tooMany()
}

console.log(teamMessage(team2));
