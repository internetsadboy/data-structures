function LinkedList() {
  this.head = null;
  // create new node
  // if list empty -> head === null -> add node to head
  // else iterate to the end of the list
  // assign the last node's next value to the new node
  this.add = function(data) {
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
  }
  // valid index > -1
  // iterate through list to 1 index before
  // we always fetch the next node (so we are 1 ahead)
  // return valid data
  // else return null
  this.get = function(index) {
    if(index > -1) {
      var current = this.head, i = 0;
      while(i++ < index && current) {
        current = current.next;
      }
      return (current ? current.data : null);
    } else {
      return null;
    }
  }
  // valid index > -1
  // if index === 0 -> reassign head to head's next val
  // else iterate through the list and keep track of previous/current nodes
  // remove current node by assingin previous.next to current.next (skips over node) 
  // return valide data
  // else return null
  this.remove = function(index) {
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
  }
  // iterate through this list while current != null
  // increment count for each iteration
  // return count
  this.size = function() {
    var current = this.head, count = 0;
    while(current) {
      current = current.next;
      count++;
    }
    return count;
  }
  // iterate through the list while current != null
  // push current.data to array
  // return array
  this.toArray = function() {
    var current = this.head, arr = [];
    while(current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
  // create array first
  this.toString = function() {
    return this.toArray().toString();
  }
};

exports.LinkedList = LinkedList;
