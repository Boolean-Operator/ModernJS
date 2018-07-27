const getPuzzle = (wordCount,callback) => {

  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined,data.puzzle)
    } else if (e.target.readyState === 4) {
      callback('An error has occured.', undefined)
    }
  })
  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()

}

const getCountry = (countryCode, callback) => {
  
  const countryRequest = new XMLHttpRequest()
  
  countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      let country = data.find((elem) => elem.alpha2Code === countryCode)
      callback(undefined, country)
      // console.log(country.name);
    } else if (e.target.readyState === 4) {
      console.log('Unable to fetch data.', undefined);
    }
  })
  countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
  countryRequest.send()
  
}  


