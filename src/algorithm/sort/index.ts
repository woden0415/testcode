/**
 * 排序算法
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
 */
function insertSort(list: number[]) {
  return list
}


/**
 * @description 希尔排序
 * @param list 
 * @returns []
 */
function shellSort(list: number[]) {
  return list
}


/**
 * @description 归并排序
 * @param list 
 * @returns []
 */
function reduceSort(list: number[]) {
  return list
}

/**
 * @description 快速排序
 * @param list 
 * @returns []
 */
function quickSort(list: number[]) {
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


let _randomList = generateRandomNumber(10)

sortSet.selectSort(_randomList)


