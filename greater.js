/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var a=[5,4,1,9,3];
 var b=2;
var c=6;
var d= 0;
var f=1;
if (a[0]>a[1] && a[0]>a[2] && a[0]>a[3] && a[0]>a[4])
{
    console.log(a[1]);
}
else if (a[1]>a[0] && a[1]>a[2] && a[1]>a[3] && a[1]>a[4])
{
    console.log(a[1]);
}
else if (a[2]>a[0] && a[2]>a[1] && a[2]>a[3] && a[2]>a[4])
{
    console.log(a[2]);
}
else if (a[3]>a[0] && a[3]>a[1] && a[3]>a[2] && a[3]>a[4])
{
    console.log(a[3]);
}
else
{
    console.log(a[4]);
}