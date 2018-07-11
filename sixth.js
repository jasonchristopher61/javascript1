/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function arrDifference (arr1, arr2) {
           var arr = [];
           arr1 = arr1.toString().split(',').map(Number);
           arr2 = arr2.toString().split(',').map(Number);
           for (var i in arr1) {
              if(arr2.indexOf(arr1[i]) === -1)
              arr.push(arr1[i]);
           }
           for(i in arr2) {
              if(arr1.indexOf(arr2[i]) === -1)
              arr.push(arr2[i]);
           }
           return arr.sort();
        }
        console.log(arrDifference([50, 40, 90], [70, 50, 99, 40, 90]));