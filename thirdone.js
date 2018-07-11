/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

 var n = prompt("Enter a number:");
       var arr = n.toString().split('') ;
       for(i=0;i<arr.length;i++)
       {
           if((arr[i]%2)==0)
           {
               arr[i]= arr[i].concat("-");
           }
       }    
       document.getElementById("big").innerHTML=arr.join("");