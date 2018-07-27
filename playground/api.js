
// Make an HTTP request to restcountries.eu


const countryCode = 'US'
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    let country = data.find((elem) => elem.alpha2Code === countryCode)
    console.log(country.name);
  } else if (e.target.readyState === 4 ) {
    console.log('Unable to fetch data.');

  }
})
countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
countryRequest.send()


 let text = request
  console.log(text);



