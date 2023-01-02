import { arrSwap } from './../../util/index';
/**
 * 排序算法
 * https://www.runoob.com/w3cnote/ten-sorting-algorithm.html
 */

import { generateRandomNumber } from "../../util"

/**
 * @description 冒泡排序
 * @param list 
 * @returns []
 * 1. 核心是，两两比较，然后交换位置。
 * 2. 如果顺序对了，就继续比较较大的数和后面的比较，保证每一波都能得到一个最大的数，最后一个肯定就是最小的
 */
// @decoratorSort()
function bubbleSort(list: number[]) {
  console.log('list1 :>> ', list.join(','));
  if (!list) return list;
  if (!Array.isArray(list)) return list;
  if (list.length === 0 || list.length === 1) return list;

  const listLength = list.length;
  for (let i = 0; i < listLength - 1; i++) {
    for (let j = 0; j < listLength - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j]
        list[j] = list[j + 1]
        list[j + 1] = temp;
      }
    }
  }
  console.log('list2 :>> ', list.join(','));
  return list
}

/**
 * @description 选择排序
 * @param list 
 * @returns []
 * 1. 假设第一个是最小的，然后从后续的元素中找到最小的和第一个进行交换，然后新增一位
 * 2. 因为每次交换后，左侧都是已经排序的，所以j的最大值不变，起始值都是i+1
 * 3. 最小值在全局管理，不是每次重置
 */
function selectSort(list: number[]) {
  console.log('list1 :>> ', list.join(','));
  if (!list) return list;
  if (!Array.isArray(list)) return list;
  if (list.length === 0 || list.length === 1) return list;

  const listLength = list.length;
  let minIndex = 0;

  for (let i = 0; i < listLength - 1; i++) {
    for (let j = i + 1; j < listLength - 1; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    let temp = list[i]
    list[i] = list[minIndex]
    list[minIndex] = temp
  }
  console.log('list2 :>> ', list.join(','));
  return list
}

/**
 * @description 插入排序
 * @param list 
 * @returns []
 * 1. 默认第0个是有序的，然后从第一个开始，先暂存当前值，然后通过指针不断遍历当前值之前数字
 * 2. 如果指针值比当前值大，则右移一位（将对比值替换掉后一个 list[index+1]=list[list]）
 * 3. 前提是索引值必须大于等于0，如果循环结束，那么将当前值赋值给[索引值+1]
 */
function insertSort(list: number[]) {
  console.log('list1 :>> ', list.join(','));
  if (!list) return list;
  if (!Array.isArray(list)) return list;
  if (list.length === 0 || list.length === 1) return list;

  const listLength = list.length;
  let preIndex: number;
  let currentValue: number;

  for (let i = 1; i < listLength; i++) {
    preIndex = i - 1;
    currentValue = list[i]

    while (preIndex >= 0 && list[preIndex] > currentValue) {
      list[preIndex + 1] = list[preIndex]
      preIndex--
    }
    list[preIndex + 1] = currentValue;
  }
  console.log('list2 :>> ', list.join(','));
  return list
}


/**
 * @description 希尔排序
 * @param list 
 * @returns []
 */
function shellSort(list: number[]) {
  console.log('list1 :>> ', list.join(','));
  if (!list) return list;
  if (!Array.isArray(list)) return list;
  if (list.length === 0 || list.length === 1) return list;

  const listLength = list.length;

  for (let step = Math.floor(listLength / 2); step > 0; step = Math.floor(step / 2)) {
    for (let i = step; i < listLength; i++) {
      let j = i;
      let temp = list[j];
      while (j - step >= 0 && list[j - step] > temp) {
        list[j] = list[j - step]
        j = j - step;
      }
      list[j] = temp;
    }
  }
  console.log('list2 :>> ', list.join(','));
  return list
}


/**
 * @description 归并排序
 * @param list 
 * @returns []
 */
function reduceSort(list: number[]) {
  if (!list) return list;
  if (!Array.isArray(list)) return list;
  if (list.length === 0 || list.length === 1) return list;

  const listLength = list.length;

  const merge = (left: number[], right: number[]) => {
    let result = []
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
    while (left.length) {
      result.push(left.shift())
    }
    while (right.length) {
      result.push(right.shift())
    }
    return result;
  }

  let middle = Math.floor(listLength / 2),
    left = list.slice(0, middle),
    right = list.slice(middle);

  return merge(reduceSort(left), reduceSort(right))
}

/**
 * @description 快速排序
 * @param list 
 * @returns []
 */
function quickSort(list: number[]) {
  console.log('list1 :>> ', list.join(','));
  if (!list) return list;
  if (!Array.isArray(list)) return list;
  if (list.length === 0 || list.length === 1) return list;

  const listLength = list.length;

  const quickInnerSort = (_list: number[], low: number, high: number) => {
    if (low >= high) return;

    let base = _list[low];
    let leftPoint = low;
    let rightPoint = high;

    while (leftPoint < rightPoint) {
      while (_list[rightPoint] >= base && leftPoint < rightPoint) {
        rightPoint--
      }
      while (_list[leftPoint] <= base && leftPoint < rightPoint) {
        leftPoint++
      }
      arrSwap(_list, leftPoint, rightPoint)
    }
    arrSwap(_list, low, rightPoint)
    quickInnerSort(_list, low, rightPoint - 1);
    quickInnerSort(_list, rightPoint + 1, high);
  }
  quickInnerSort(list, 0, listLength - 1)

  return list
}

/**
 * @description 堆排序
 * @param list 
 * @returns []
 */
function stackSort(list: number[]) {
  return list
}

/**
 * @description 计数排序
 * @param list 
 * @returns []
 */
function countSort(list: number[]) {
  return list
}

/**
 * @description 桶排序
 * @param list 
 * @returns []
 */
function bucketSort(list: number[]) {
  return list
}

/**
 * @description 基数排序
 * @param list 
 * @returns []
 */
function baseSort(list: number[]) {
  return list
}



/**
 * 排序组
 */
const sortSet = {
  bubbleSort: bubbleSort,
  selectSort: selectSort,
  insertSort: insertSort,
  shellSort: shellSort,
  reduceSort: reduceSort,
  quickSort: quickSort,
  stackSort: stackSort,
  countSort: countSort,
  bucketSort: bucketSort,
  baseSort: baseSort,
}


let _randomList = generateRandomNumber(20)

console.log(sortSet.quickSort(_randomList))


