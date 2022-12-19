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


// console.log(generateRandomNumber(12))