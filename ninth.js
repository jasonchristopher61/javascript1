/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };
function keys(obj) 
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(keys(student));
/*
Exception: SyntaxError: missing ) after argument list
evalWithDebugger@resource://devtools/shared/base-loader.js -> resource://devtools/server/actors/webconsole.js:1437:16
onEvaluateJS@resource://devtools/shared/base-loader.js -> resource://devtools/server/actors/webconsole.js:945:20
onEvaluateJSAsync@resource://devtools/shared/base-loader.js -> resource://devtools/server/actors/webconsole.js:916:20
onPacket@resource://devtools/shared/base-loader.js -> resource://devtools/server/main.js:1769:15
receiveMessage@resource://devtools/shared/base-loader.js -> resource://devtools/shared/transport/transport.js:760:7
*/