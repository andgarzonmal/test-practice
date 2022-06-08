function len(string) {
  if (string.length > 1 && string.length < 10){
    return string.length
  } else if (string.length < 1) {
    throw new Error(
      'The string needs to be at least 1 character long.');
  } else {
    throw new Error('The string cant be longer than 10 characters.');
  }
}

module.exports = len