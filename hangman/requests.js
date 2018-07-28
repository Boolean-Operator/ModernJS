const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      resolve(data.puzzle)
    } else if (e.target.readyState === 4) {
      reject('An error has occured.')
    }
  })
  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()

})



const getCountry = (countryCode) => new Promise((resolve, reject) => {
  const countryRequest = new XMLHttpRequest()
  
  countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      let country = data.find((elem) => elem.alpha2Code === countryCode)
      resolve(country)
    } else if (e.target.readyState === 4) {
      reject('Unable to fetch data.');
    }
  })
  countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
  countryRequest.send()
})