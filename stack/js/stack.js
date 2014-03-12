function Stack() {

    this.top = null;
    this.count = 0;

    this.size = function() {
      return this.count;
    }
    // iteration, n = 1, node.next = null, this.top = new node
    // iteration, n > 1, node.next = this.top (prev node), this.top = new node
    this.push = function(data) {
      var node = {
        data : data,
        next : null
      }
      node.next = this.top;
      this.top = node;
      this.count++;
    }
    // return top node's data
    this.peek = function() {
      if(this.top === null) {
        return null;
      } else {
        return this.top.data;
      }
    }
    // store this.top
    // reassign this.top to this.top.next
    // decrement stack count
    // return initial top node's data
    this.pop = function() {
      if(this.top === null) {
        return null;
      } else {
        var out = this.top;
        this.top = this.top.next;
        if(this.count > 0) {
          this.count--;
        }
        return out.data;
      }
    }
    // return null if stack is empty
    // create an array of the stack's nodes
    // return the array
    this.toString = function() {
      if(this.top === null) {
        return null;
      } else {
        var arr = [];
        var current = this.top;
        for(var i = 0; i < this.count; i++){
          arr[i] = current.data;
          current = current.next;
        }
        return arr;
      }
    }
};

exports.Stack = Stack;