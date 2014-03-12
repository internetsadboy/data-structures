var Queue = require('./queue').Queue;
var q = new Queue();
var i = 0;
while(i++ < 10) {
  q.enqueue(i);
}
console.log((q._queue).sort(function(a, b) { return a - b;}))
q.dequeue();
console.log((q._queue).sort(function(a, b) { return a - b;}))
console.log(q.getIndex(6));