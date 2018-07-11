function duplicate(num) {
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
var Mynum = [1, 3, 2, 4, 5, 3, 7, 8, 7, 3, 6];
result = duplicate(Mynum);
console.log(Mynum);
console.log(result);