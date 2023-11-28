// EXERCISE 1: Function taking two number parameters and returns the min

function minNumber(a, b) {
  if (a < b) {
    return a;
  } else if ( b < a ) {
    return b;
  }
}

console.log(minNumber(10, 20));