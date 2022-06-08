const { string } = require("yargs");

function capitalize(str) {
  let next = str.slice(1)
  let first = str[0].toUpperCase()
  mystring = first + next
  return mystring
};
  
module.exports = capitalize;