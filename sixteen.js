/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var obj = {
"One":"1",
"Two":"2",
"Three":"3",
"Four":"4"
}
var extract=Object.values(obj);
console.log(extract);
/*
Exception: TypeError: Object.value is not a function
@Scratchpad/9:16:13
*/