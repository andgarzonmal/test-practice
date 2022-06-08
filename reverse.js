function reverse(string) {
  let reverseStr = '' 
  for (let i= string.length-1; i>=0; i--){
    reverseStr = reverseStr + string[i]
  }
  return reverseStr
}

module.exports = reverse