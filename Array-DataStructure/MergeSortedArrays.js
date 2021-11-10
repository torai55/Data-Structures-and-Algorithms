/**
 * 將兩個由小到大排序的 array 合併成一個由小到大排序的 array。
 */

function mergeSortedArrays(arr1, arr2) {
  if (!(arr1 instanceof Array) || !(arr2 instanceof Array)) throw new Error('input must be an array!')

  if (arr1.length === 0) return arr2
  if (arr2.length === 0) return arr1

  let i = 0
  let j = 0
  const result = []

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++])
    } else {
      result.push(arr2[j++])
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i++])
  }

  while (j < arr2.length) {
    result.push(arr2[j++])
  }

  return result
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]))
