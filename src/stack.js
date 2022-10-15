const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){ 
    this.data = [];      
  }

  push(element){
    this.data.push(element);
    return this;
  }
  
  peek(){
    return this.data[this.data.length-1];
  }

  pop() {
    this.peek();
    if (this.data.length == 0){
      return undefined;
    }
    this.data.pop();
  }

}

const stack = new Stack();
stack.push(1);
stack.peek();
stack.pop(); 
stack.pop();

module.exports = {
  Stack
};
