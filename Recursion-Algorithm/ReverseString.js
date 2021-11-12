// 將輸入的字串反轉
function reverseStringIterative(str) {
  let reversedString = ''

  for (let i = 0; i < str.length; i++) {
    reversedString += str[str.length - i - 1]
  }

  return reversedString
}

function reverseStringRecursive(str) {
  return str.length > 0 ? str[str.length - 1] + reverseStringRecursive(str.slice(0, -1)) : ''
}

console.log(reverseStringIterative('yoyo mastery'))
console.log(reverseStringRecursive('yoyo mastery'))
//should return: 'yretsam oyoy'
