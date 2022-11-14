/**
 * @description 选择排序,选择右边最小的和左边最大的交换
 * @param arr 
 * @returns 
 */
function selectSort(arr: Array<number>): Array<number> {
  const arrLen = arr.length;
  if (arrLen <= 1) return arr;
  let minIndex
  let temp;
  for (let i = 0; i < arrLen; i++) {
    minIndex = i
    for (let j = i + 1; j < arrLen; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp;

  }
  return arr
}
/**
 * @description 冒泡排序  
 * @param arr 
 * @returns 
 */
function bubbleSort(arr: Array<number>): Array<number> {
  const arrLen = arr.length;
  if (arrLen <= 1) return arr;
  let temp;
  for (let i = 0; i < arrLen; i++) {
    for (let j = i + 1; j < arrLen; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
      }
    }
  }

  return arr;
}


/**
 * @description 插入排序
 * @param arr 
 * @returns 
 */
function insertSort(arr: Array<number>): Array<number> {

  let preIndex;
  let current;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i]
    preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }

  return arr
}

const testList = [2, 3, 6, 1, 10, 5]

// console.log(selectSort(testList))
// console.log(bubbleSort(testList))
console.log(insertSort(testList).join(','))