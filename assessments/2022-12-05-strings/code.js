const upToX = (string) => {
  return string.substring(0,string.indexOf('x'))
}
const charactersAround = (string, index) => {
  return string[index - 1] + string[index + 1]
}
const middle = (string) => {
  return string.substring(string.length*.25, string.length*.75)
}
const pair = (string1, string2) => {
  return string1 + ' and ' + string2
}
const containsX = (string) => {
  if (string.indexOf('x') === -1) {
    return false
  } else {return true}
}
const slug = (string1,string2,string3) => {
  return string1.toLowerCase() + '-' + string2.toLowerCase() + '-' + string3.toLowerCase()
}