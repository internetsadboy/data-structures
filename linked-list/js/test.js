var LinkedList = require('./linked-list').LinkedList;

// test add
var myList = new LinkedList;
for(var i = 1; i <= 100; i++) {
	myList.add(i);
}
console.log(myList.toArray());
console.log(myList.size());

// test remove
for(var i = 0; i < 50; i++) {
	myList.remove(i);
}
console.log(myList.toArray());
console.log('myList size:    ' + myList.size());

// test item
console.log('myList.item(0): ' + myList.item(0));