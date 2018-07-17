arr = [6,2,7,1,9,4,3,5,8]
let count = arr.length

while(count > 0) {
  count = count -1
  let max = 0
  let index = 0
  
  for ( let i = 0; i< arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      index = i
    }
  }
  
  console.log(`Count: ${count} -  Index of Max: ${index} - Max: ${arr[index]}`);
  
  arr[index] = 0
}
