function selectionSort(arr){
  let temp = 0;
  let min = 0;
  // 找出最小的下标，交换
  for(let i=0;i<arr.length-1;i++) {
    min = i
    for(let j=i+1;j<arr.length;j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if(min != i) {
      temp = arr[i]
      arr[i] = arr[min];
      arr[min] = temp
    }
  }
  return arr
}

function insertSort(arr){
  for(let i=1;i<arr.length;i++) {
    let value = arr[i]
    let position = i;
    while (position>0 && arr[position-1]>value) {
      arr[position]=arr[position-1]
      position--
    }
    arr[position]=value
  }
  return arr
}

const sortArr = [3, 66, 77, 33, 44, 99, 12, 8, 4, 876, 11111, 32];
// console.log(selectionSort(sortArr))
console.log(insertSort(sortArr))