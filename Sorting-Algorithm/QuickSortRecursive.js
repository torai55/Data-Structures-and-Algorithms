const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

/**
 * 排好 pivot 後將原陣列切割成兩個小陣列，遞迴呼叫自身
 * 遞迴終點：如果陣列長度只有 1(left === right) 等於排序好的陣列，直接回傳
 * 會改變原陣列
 * @param {array} array
 * @param {number} left
 * @param {number} right
 * @returns {array} - 排序好的 array
 */
function quickSort(array, left, right) {
  if (left >= right) return array

  let pivot = partition(array, left, right)
  return quickSort(array, left, pivot - 1) + quickSort(array, pivot + 1, right)
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
  const pivotValue = array[right]

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(array, partitionIndex, right)
  return partitionIndex
}

/**
 * 將陣列中兩個 index 的值互換
 * 會改變原陣列
 * @param {array} array
 * @param {number} index1
 * @param {number} index2
 * @return {void}
 */
function swap(array, index1, index2) {
  let temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1)
console.log(numbers)
