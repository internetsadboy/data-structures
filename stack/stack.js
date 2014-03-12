function Stack() {
    
  this.top = null;
  this.count = 0;

  this.GetCount = function() {
    return this.count;
  }

  this.GetTop = function() {
    return this.top;
  }

  this.Push = function(data) {
    var node = {
      data : data,
      next : null
    }
    node.next = this.top;
    this.top = node;
    this.count++;
  }

  this.Peek = function() {
    if(this.top === null) {
      return null;
    } else {
      return this.top.data;
    }
  }

  this.Pop = function() {
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

  this.DisplayAll = function() {
    if(this.top === null) {
      return null;
    } else {
      var arr = new Array();
      var current = this.top;
      for(var i = 0;i<this.count;i++){
        arr[i] = current.data;
        current = current.next;
      }
      return arr;
    }
  }
  
}

exports.Stack = Stack
