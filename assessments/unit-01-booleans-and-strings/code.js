/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (pulled, smoke, planned) => {
  return !pulled&&smoke || pulled&&smoke || pulled&&planned
}

const canBePresident = (age, citizen, years) => {
  if (age >= 35) {
    if (citizen === true) {
      if (years >= 14) {
        return true
      } else { return false }
    } else { return false }
  } else { return false }
}
const willSeeTweet = (followed, retweet, blocked) => {
  if (followed === true) {
    if (blocked === false) {
      return true
    } else { return false }
  } else {
    if (retweet === true) {
      if (blocked === false) {
        return true
      } else {
        return false
      }
    }
  }
}
const evenGreaterThanZero = (number) => {
  if (number > 0) {
    if (number % 2 === 0) {
      return true
    } else {return false}
  } else {return false}
}
const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true
      } else {return false}
    } else {return true}
  } else {return false}
}
const firstAndLast = (string) => {
  return string[0] + string[string.length - 1]
}
const swapFrontAndBack = (string) => {
  return string.substring(string.length / 2, string.length) + string.substring(0, string.length / 2)
}

const simplePigLatin = (string, number) => {
  let firsthalf = (string.substring(0, number))
  return string.substring(number, string.length) + firsthalf + 'ay'
}

const randomCharacter = (string) => {
  return string[rand(string.length)]
}

const randomCharacterUpDown = (string) => {
  let random = string[rand(string.length)]
  return random.toUpperCase() + random.toLowerCase()
}
const isAllUpperCase = (string) => {
  return string === string.toUpperCase()
}
const sameIgnoringCase = (string1, string2) => {
  return string1.toLowerCase() === string2.toLowerCase()
}