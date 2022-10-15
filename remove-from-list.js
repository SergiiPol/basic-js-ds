
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;

  }
   }
   class LinkeyedList {
      constructor() {
        this.head = null;
        this.tail = null;
      }
    
  add(value) {
      const newNode = new ListNode(value);
    
      if (!this.head || !this.tail) {
        this.head = newNode;
        this.tail = newNode;
    
        return this;
      }
    
      this.tail.next = newNode;
    
      this.tail = newNode;
    
      return this;
    }
  fromArray(values) {
      values.forEach(value => this.add(value));
    
      return this;
    }
  delete(value) {
      if (!this.head) {
        return null;
      }
    
      let deletedNode = null;
    
      while (this.head && this.head.value === value) {
        deletedNode = this.head;
    
        this.head = this.head.next;
      }
    
      let currentNode = this.head;
    
      if (currentNode !== null) {
        while (currentNode.next) {
          if (currentNode.next.value === value) {
            deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
          } else {
            currentNode = currentNode.next;
          }
        }
      }
           return deletedNode;
    }
    
}
const l = new LinkeyedList;