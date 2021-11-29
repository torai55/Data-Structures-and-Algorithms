const cache = [1, 1]
var climbStairs = function(n) {
  if (cache[n]) return cache[n]
  let result = climbStairs(n - 1) + climbStairs(n - 2)
  cache[n] = result
  return result
}

const stairNumber = parseInt(process.argv[2], 10)
if (typeof stairNumber === 'number') {
  console.log(climbStairs(stairNumber))
} else {
  console.log('please enter number as third argument')
}
