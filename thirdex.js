/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var fruits=["Apples","Oranges","Banana","Kiwi"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);


/*
Exception: SyntaxError: expected expression, got '<'
evalWithDebugger@resource://devtools/shared/base-loader.js -> resource://devtools/server/actors/webconsole.js:1437:16
onEvaluateJS@resource://devtools/shared/base-loader.js -> resource://devtools/server/actors/webconsole.js:945:20
onEvaluateJSAsync@resource://devtools/shared/base-loader.js -> resource://devtools/server/actors/webconsole.js:916:20
onPacket@resource://devtools/shared/base-loader.js -> resource://devtools/server/main.js:1769:15
receiveMessage@resource://devtools/shared/base-loader.js -> resource://devtools/shared/transport/transport.js:760:7
*/