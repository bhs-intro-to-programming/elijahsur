const countTens = (numbers) => {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
      count++;
    }
  }
  return count
}

const sum = (numbers) => {
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    let total = total + numbers[i]
  }
  return total
}

const evens = () => {

}

const anyOverOneHundred = (numbers) => {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 100) {
      count++;
    }
  }
  if (count >= 1) {
    return true
  } else {
    return false
  }
}