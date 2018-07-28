//Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
    callback(undefined,"Time's up Sucka!");
  }, 2000)
}

getDataCallback((err, data) => {
  if (err) {
    
  } else {
    console.log(data);
    
  }
})

// Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`This is the resolve data: ${data}`)
    // reject('This is the reject error')
    // reject('This is the reject error')
  }, 2000)
})


const myPromise = getDataPromise(123)
myPromise.then((data) => {
  console.log(data);
  
}, (err)=> {
  console.log(err);
  
})