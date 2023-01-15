function merge(arr1, arr2) {
   const results = []
   let i = 0;
   let j = 0;
   while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
         results.push(arr1[i])
         i++;
      } else {
         results.push(arr2[j])
         j++;
      }
   }
   while (i < arr1.length) {
      results.push(arr1[i])
      i++;
   }
   while (j < arr2.length) {
      results.push(arr2[j])
      j++;
   }
   // console.log(results)
   return results
}

function mergeSort(arr) {
   if (arr.length <= 1) return arr;
   const mid = Math.floor(arr.length / 2)
   const left = mergeSort(arr.slice(0, mid))
   const right = mergeSort(arr.slice(mid))
   return merge(left, right)
}

module.exports = { merge, mergeSort };

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
merge(arr1, arr2) // [1,2,3,4,4,5,6,8]

arr1 // [1,3,4,5];
arr2 // [2,4,6,8];

let arr3 = [-2, -1, 0, 4, 5, 6];
let arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

merge(arr3, arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

let arr5 = [3, 4, 5]
let arr6 = [1, 2]

merge(arr5, arr6) // [1,2,3,4,5]

mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
mergeSort([1, 2, 3]); // [1, 2, 3]
mergeSort([]);

let nums = [
   4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
   453, 546, 75, 67, 4342, 32
];

mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35,
                 //  43, 67, 75, 232, 232, 453, 546, 4342]