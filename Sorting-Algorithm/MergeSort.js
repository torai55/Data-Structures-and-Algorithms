// 由小到大
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  let middleIndex = Math.floor(array.length / 2)
  let left = array.slice(0, middleIndex)
  let right = array.slice(middleIndex)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const mergedArray = []
  let leftIndex = 0
  let rightIndex = 0

  while(leftIndex < left.length && rightIndex < right.length) {
    let smallerValue = left[leftIndex] < right[rightIndex] ? left[leftIndex++] : right[rightIndex++]
    mergedArray.push(smallerValue)
  }

  while(leftIndex < left.length) {
    mergedArray.push(left[leftIndex++])
  }

  while(rightIndex < right.length) {
    mergedArray.push(right[rightIndex++])
  }
  return mergedArray
}

const answer = mergeSort(numbers)
console.log(answer)
