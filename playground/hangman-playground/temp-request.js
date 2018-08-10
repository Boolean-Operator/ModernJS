const getPuzzle = (callback) => {

  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined,data.puzzle)
    } else if (e.target.readyState === 4) {
      callback('An error has occured.', undefined)
    }
  })
  //wordCount 1-9
  request.open('GET', `//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()

}