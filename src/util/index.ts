/**
 * @description 生成随机数
 * @param length 
 */
export function generateRandomNumber(length = 10) {
  let randomList: number[] = [];
  for (let i = 0; i < length;) {
    let _random = parseInt(Math.random() * 50 + '', 10)
    if (randomList.includes(_random)) continue
    randomList.push(_random)
    i++
  }
  return randomList;
}


/**
 * @description 生成链表
 * @param length 
 */
export function generateLinkedList(length: number) {
  let head = null;
  let current = head;

  function node(value: any) {
    return {
      value,
      next: null
    }
  }
  let listArray = generateRandomNumber(length)
  head = node(listArray[0])
  current = head;
  for (let index = 1; index < length; index++) {
    current.next = node(listArray[index])
    current = current.next
  }
  return head
}

// console.log(generateLinkedList(2))
// console.log(generateRandomNumber(12))