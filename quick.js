/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
   const swap = (arr, idx1, idx2) => {
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
   }

   // Assume the pivot is always the first element.
   let pivot = arr[start];
   let swapIdx = start;

   for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
         swapIdx++;
         swap(arr, swapIdx, i);
      }
   }
   // Swap the pivot from the start
   swap(arr, start, swapIdx);
   return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
   if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);

      quickSort(arr, pivotIndex + 1, right);
   }

   return arr;
}

module.exports = { pivot, quickSort };

let arr = [4, 2, 5, 3, 6];
pivot(arr); // 2
arr; // [3, 2, 4, 5, 6];


quickSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
quickSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
quickSort([1, 2, 3]); // [1, 2, 3]
quickSort([]);

let nums = [
   4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23,
   2, 453, 546, 75, 67, 4342, 32
];

quickSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34,
                 //  35, 43, 67, 75, 232, 232, 453, 546, 4342]