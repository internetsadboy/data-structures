var LinkedList = require('./linked-list').LinkedList;
var myList = new LinkedList();
// test add
for(var i = 1; i <= 10; i++) {
	myList.add(i);
}
// test toArray, size
console.log(myList.toArray());
console.log('myList size:   ' + myList.size());
// test remove
myList.remove(0);
myList.remove(8);
console.log(myList.toArray());
console.log('myList size:   ' + myList.size());
// test get
console.log('myList.get(0): ' + myList.get(0));
