let calculations = 0
/**
 * 時間複雜度 O(n) => 畫出樹狀圖可發現只有最左邊的節點需要運算，其它節點拿快取的值即可
 * @returns function - 會進行快取的 fib 函式
 */
function fibonacci() {
  let cache = {}
  return function fib(n) {
    calculations++
    if (cache[n]) return cache[n]
    if (n < 2) return n
    cache[n] = fib(n - 1) + fib(n - 2)
    return cache[n]
  }
}

let calc = 0
/**
 * 時間複雜度 O(n^2)
 * @param {number} n 
 * @returns number fibValue
 */
function oldFib(n) {
  calc++
  if (n < 2) return n
  return oldFib(n - 1) + oldFib(n - 2)
}

function bottomUpFib(n) {
  const result = [0, 1]
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2]
  }
  return result[n]
}

const memorizedFib = fibonacci()
console.log(memorizedFib(5))
console.log(memorizedFib(7))
console.log(`calculations: ${calculations}`)

console.log(oldFib(5))
console.log(oldFib(7))
console.log(`calc: ${calc}`)

console.log(bottomUpFib(7))
