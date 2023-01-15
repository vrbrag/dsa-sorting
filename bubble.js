function bubbleSort(arr) {
   const swap = (arr, idx1, idx2) => {
      // swap order
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
   }
   for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            // console.log(arr)
            swap(arr, j, j + 1);
         }
      }
   }
   return arr;
}

module.exports = bubbleSort;

bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
bubbleSort([1, 2, 3]); // [1, 2, 3]
bubbleSort([]);