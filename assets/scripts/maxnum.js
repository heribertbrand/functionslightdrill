// EXERCISE 2: Function taking two number parameters and returns the max

function maxNumber (a, b) {
  if (a > b) {
    return a
  } else if (b > a) {
    return b
  }
}

console.log(maxNumber(1000, 5000));
