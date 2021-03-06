/*
Udemy JavaScript Algorithms and Data Structures Masterclass

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4
*/

 const countUniqueValues = (array) => {
   let count = 1;
   let index = 0;
   if(array.length === 0) {
     return 0;
   }
   for(let i = 1; i < array.length; i++) {
     if(array[i] !== array[index]) {
       count++;
       index = i;
     }
   }

   return count;
 }