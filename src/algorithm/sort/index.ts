/**
 * 排序算法
 */

import { generateRandomNumber } from "../../util"

// 通用逻辑
function commonLogic(list) {
  return []
}

/**
 * @description 冒泡排序
 * @param list 
 * @returns []
 */
// @decoratorSort()
function bubbleSort(list: number[]) {
  if (!list) return list;
  if (!Array.isArray(list)) return list;
  if (list.length === 0 || list.length === 1) return list;

  console.log('list :>> ', list);
  return list
}

/**
 * @description 选择排序
 * @param list 
 * @returns []
 */
function selectSort(list: number[]) {
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


let _randomList = generateRandomNumber(5)

sortSet.bubbleSort(_randomList)


