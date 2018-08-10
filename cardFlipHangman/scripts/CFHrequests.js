const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
   if (response.status === 200) {
     const data = await response.json()
     return data.puzzle
   }else {
     throw new Error('Unable to get puzzle')
   }
}

// const getCountry = async (countryCode) => {
//   const response = await fetch('//restcountries.eu/rest/v2/all')
//   if (response.status === 200) {
//     const data = await response.json()
//     return country = data.find((elem) => elem.alpha2Code === countryCode)
//   } else {
//     throw new Error('Unable to fetch data')
//   }
// }

// const webToken = '56a96db1285e41'
// const getLocation = async () => {
//   const response = await fetch(`//ipinfo.io/json?token=${webToken}`)
//   if (response.status === 200) {
//     const data = await response.json()
//     return data
//   } else {
//     throw new Error('Unable to fetch data')
//   }
// }

// const getCurrentCountry = async () => {
//   const location = await getLocation()
//   return getCountry(location.country)
// }
