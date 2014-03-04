function Queue() {

  this.tail = -1;
  this._queue = [];

  this.enqueue = function(node) {
    if(typeof node !== 'object') {
      this.tail++
      this._queue[this.tail] = node;
    } else {
      for(var i in node) {
        this._queue[this.tail++] = node[i];
      }
    }
  }

  this.dequeue = function() {
    var removed = this._queue.shift();
    this.tail--;
    return removed;
  }

  this.size = function() {
    return this.tail + 1;
  }

  this.isEmpty = function() {
    return this.size() === 0;
  }

  this.peek = function() {
    return this._queue[0];
  }

  this.contains = function(data) {
    console.log('this.contains(9)')
    for(var i in this._queue) {
      if(data === this._queue[i]) return true;
    }
    return false;
  }
  
  this.locate = function(data) {
    for(var i in this._queue) {
      if(data === this._queue[i]) return i;
    }
    return 'invalid data';
  }

}

exports.Queue = Queue;
