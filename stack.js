class Stack {
    constructor() {
      this.stack = [];
    }
    push(item) {
      this.stack.push(item);
    }
    peek() {
        return this.stack[this.stack.length-1];

    
    }
    pop() {
      this.peek();
      if (this.stack.length == 0)
        return undefined;
      this.stack.pop();
    }
   }
  
   const stack = new Stack();
  
   stack.push(1);
   stack.peek(); 
   stack.pop();
   stack.pop(); 
