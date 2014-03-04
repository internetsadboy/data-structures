function LinkedList() {
  this.head = null;
}

LinkedList.prototype = {
  constructor: LinkedList,
  
  add: function(data) {
    var node = {
      data:data,
      next:null
    };
    var current;
    if(this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
  },
  
  item: function(index) {
    if(index > -1) {
      var current = this.head, i = 0;
      while(i++ < index && current) {
      	current = current.next;
      }
      return (current ? current.data : null);
    } else {
      return null;
    }
  },
  
  remove: function(index) {
    if(index > -1) {
    var current = this.head, previous, i = 0;
      if(index === 0) {
        this.head = current.next;
      } else {
	while(i++ < index) {
	  previous = current;
	  current = current.next;
	}
	previous.next = current.next;
      }
      return (current ? current.data : null);
    } else {
      return null;
    }
  },
  
  size: function() {
    var current = this.head, count = 0;
    while(current) {
      current = current.next;
      count++;
    }
    return count;
  },
  toArray: function() {
    var current = this.head, array = [];
    while(current) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  },
  
  toString: function() {
    return this.toArray().toString();
  }
}

exports.LinkedList = LinkedList;

