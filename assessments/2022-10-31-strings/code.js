/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton and more credit for a skeleton with a
// reasonable argument list. To get full credit you need to write a correct
// function but you can get partial credit for a function that is basically
// correct even if contains small mistakes.
const firstHalf = (string) => {
  return string.substring(0, string.length / 2)
}
const secondHalf = (string) => {
  return string.substring(string.length / 2, string.length)
}
const upDown = (string) => {
  return string.toUpperCase() + string
}
const firstFewEveryOther = (string) => {
  let fin = ''
  for (let i = 0; i > string.length - 1; i + 2) {
    fin + string.substring(i, i)
  }
  return fin
}
const upDownLastCharacter = (string) => {
  return string.substring(string.length - 1, string.length).toUpperCase() + string.substring(string.length - 1, string.length)
}
const firstAndLast = (string) => {
  return string.substring(0, 1) + string.substring(string.length - 1, string.length)
}
const swapFrontAndBack = (string) => {
  return string.substring(string.length / 2, string.length) + string.substring(0, string.length / 2)
}
const simplePigLatin = (string, number) => {
  return string.substring(number, string.length) + string.substring(0, number) + 'ay'
}
const randomCharacter = (string) => {
  return string[rand]
}
const randomCharacterUpDown = (string) => {

}
const isAllUpperCase = (string) => {
  return string === string.toUpperCase()
}
const sameIgnoringCase = (string1, string2) => {
  return string1 === string2
}
const firstName = (string) => {
  return string.substring(0, string.search(' '))
}
const lastName = (string) => {
  return string.substring(string.search(' ') + 1, string.length)
}
const initials = (string) => {
  return string.substring(0, 0) + string.substring(string.search(' ') + 1, string.search(' ') + 1)
}