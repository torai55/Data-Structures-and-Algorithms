var maxProfit = function(prices) {
  let min = prices[0]
  let profit = 0
  
  for (let i = 0; i < prices.length; i++) {
     if (prices[i] > min) {
       profit = Math.max(prices[i] - min, profit)
     } else {
       min = prices[i]
     }
  }
  return profit
}

const input = JSON.parse(process.argv.slice(2).join(''))
if (input instanceof Array) {
  console.log(`maxProfit: ${maxProfit(input)}`)
} else {
  console.log('please input an array as argument')
}
