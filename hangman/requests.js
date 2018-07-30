const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  .then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch puzzle')
    }
  }).then((data) => {
    return data.puzzle
  })
}

const getCountry = (countryCode) => {
  return fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch data')
    }
  }).then((data) => {
    return country = data.find((elem) => elem.alpha2Code === countryCode)
  })
}

const webToken = '56a96db1285e41'
const getLocation = () => {
  return fetch(`https://ipinfo.io/json?token=${webToken}`)
  .then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch data')
    }
  }).then((data) => {
    return data
  })
}