//Callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
      if (typeof num === 'number') {
        callback(undefined, num * 2)
      } else {
        callback("Gotta give me a number, Sucka!");
      }
  }, 2000)
}


// First Level of Callback Hell ~o~
getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    })
  }  
})

// Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof num === 'number'
    ? resolve(num*2)
    : reject('Number must be provided')
  }, 2000)
})

// Nested
getDataPromise(2).then((data) => {
  getDataPromise(data).then((data) => {
    console.log(`Nested Promise data: ${data}`);
  }, (err) => {
    console.log(err);
  })
}, err => {
  console.log(err);
})

// Chaining
getDataPromise(10).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  console.log(`Chained Promise data ${data}`);
}).catch((err) => {
  console.log(err);
  
})