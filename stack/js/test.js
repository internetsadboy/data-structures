var Stack = require('./stack').Stack;
var s = new Stack();
s.push(1);
s.push(12);
s.push(18);
s.push('beep');
console.log(s.toString());
s.pop();
console.log(s.toString());