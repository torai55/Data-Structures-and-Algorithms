const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

/**
 * 
 * @param {array} array 
 * @param {number} left 
 * @param {number} right 
 * @returns 
 */
function quickSort(array, left, right) {
  let leftIndexStack = [left]  
  let rightIndexStack = [right]
  let leftIndex, rightIndex
  let pivot

  while(leftIndexStack.length > 0 && rightIndexStack.length > 0) {
    leftIndex = leftIndexStack.pop()
    rightIndex = rightIndexStack.pop()

    pivot = partition(array, leftIndex, rightIndex)

    if (pivot - 1 > leftIndex) { // pivot 左邊還有陣列
      leftIndexStack.push(leftIndex)
      rightIndexStack.push(pivot - 1)
    }

    if (pivot + 1 < rightIndex) { // pivot 右邊還有陣列
      leftIndexStack.push(pivot + 1)
      rightIndexStack.push(rightIndex)
    }
  }

  return array
}

/**
 * 利用雙指針法找到 pivot 的位置
 * 並做初步的排序，讓 array 左邊的值都小於它，右邊的值都大於它
 * @param {array} array - 待排序的 array
 * @param {number} left - array 最左邊的 index
 * @param {number} right - array 最右邊的 index
 * @return {number} partitionIndex - 排好位置之後的 pivot index，可將原陣列分割成左右兩個子陣列
 */
function partition(array, left, right) {
  let partitionIndex = left
  const partitionValue = array[right]

  for (let i = left; i < right; i++) {
    if (array[i] < partitionValue) {
      swap(array, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(array, partitionIndex, right)
  return partitionIndex
}

function swap(array, index1, index2) {
  let temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1)
console.log(numbers)
