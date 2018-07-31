const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
   if (response.status === 200) {
     const data = await response.json()
     return data.puzzle
   }else {
     throw new Error('Unable to get puzzle')
   }
}

const getCountry = async (countryCode) => {
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  if (response.status === 200) {
    const data = await response.json()
    return country = data.find((elem) => elem.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to fetch data')
  }
}

const webToken = '56a96db1285e41'
const getLocation = async () => {
  const response = await fetch(`https://ipinfo.io/json?token=${webToken}`)
  if (response.status === 200) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Unable to fetch data')
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountry(location.country)
}


// // chaining Promises and fetch request for restcountries.eu(line 50) to ipinfo.io(line 49)
// getLocation().then((location) => {
//   return getCountry(location.country)
// }).then((country) => {
//   console.log(country.name);
// }).catch((err) => {
//   console.log(err);

// })