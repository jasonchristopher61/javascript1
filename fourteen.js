/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
for(var i=0;i<myObj.length;i++){
  prog=myObj[i];
  if(prog.occupation=="Programmer"){
     console.log(prog);
     }
}
function myFunction(a,b) {
   for(i=0;i<myObj.length;i++)
       if(a.age<b.age){
           return 1;
       }
}
    console.log(myObj.sort(myFunction));

var newObj=myObj.map(person => ({age:person.age,id:person.name}));
console.log(newObj);
var newObj={}
for (var z of myObj){
   newObj[z['occupation']]=[];
}
for (var z of myObj){
   newObj[z['occupation']].push(z);
}
for (var k in newObj){
   for (var l of newObj[k]){
         delete l['occupation']
   }
}
console.log(newObj)


/*
Exception: ReferenceError: age is not defined
newObj<@Scratchpad/1:30:45
@Scratchpad/1:30:12
*/