function getSum(arr: Array<number>, num: number): Array<Array<number>> {

  var result = [];
  var obj: { [key: string]: number } = {}
  for (let i = 0; i < arr.length; i++) {
    if (!obj[(num - arr[i]).toString()]) {
      obj[arr[i]] = 1
    } else {
      result.push([num - arr[i], arr[i]])
      delete obj[(num - arr[i]).toString()]
    }
  }
  return result
}
getSum([1, 4, 5, 3, 2, 1, 6, 6], 7).forEach(v => { 
  console.log(v[0], v[1])
})

// console.log(getSum([1, 4, 5, 3, 2, 1, 6], 7))