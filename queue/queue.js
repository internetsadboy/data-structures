function Queue() {
  // tail keeps track of where the end of the queue is
  // _queue is an array used to organize data
  this.tail = -1;
  this._queue = [];
  // acceptable args: json, array, string, char, int, float, boolean
  // if not array -> increment tail and add node to queue at current tail index
  // if array -> for each element increment the tail and add element to the current tail index 
  this.enqueue = function(node) {
    if(typeof node !== 'object') {
      this._queue[++this.tail] = node;
    } else {
      for(var i in node) {
        this._queue[++this.tail] = node[i];
      }
    }
  }
  // decrement tail 
  // shift removes/returs the first element in the _queue 
  this.dequeue = function() {
    this.tail--;
    return this._queue.shift();
  }
  // tail == last index of _queue[] 
  this.size = function() {
    return this.tail + 1;
  }
  // boolean conditional 
  this.isEmpty = function() {
    return this.size() === 0;
  }
  // return the first element in _queue[]
  this.peek = function() {
    return this._queue[0];
  }
  // iterate through the _queue[]
  // if node is in _queue[] return true
  this.contains = function(node) {
    for(var i in this._queue) {
      if(node === this._queue[i]) return true;
    }
    return false;
  } 
  // iterate through the _queue 
  // if node is in _queue -> return index
  this.getIndex = function(node) {
    for(var i in this._queue) {
      if(node === this._queue[i]) return i;
    }
    return 'invalid node';
  }
};

exports.Queue = Queue;