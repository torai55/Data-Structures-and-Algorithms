function firstRecurringCharacter(array) {
  const record = {}
  for (let i = 0; i < array.length; i++) {
    if (record[array[i]]) return array[i]
    record[array[i]] = true
  }
  return undefined
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])) // 2
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])) // 1
console.log(firstRecurringCharacter([[2, 3, 4, 5]])) // undefined
