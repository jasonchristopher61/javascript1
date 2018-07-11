/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var today = new Date();
var date = today.getDate();

var month = today.getMonth(); 
var yyyy = today.getFullYear();
var time=today.toLocaleTimeString();
if(date<10) 
{
    date='0'+date;
} 

if(month<10) 
{
    month='0'+month;
} 

today = month+'/'+date+'/'+yyyy+'/'+time;
console.log(today);