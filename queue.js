
class Queue{
	constructor()
	{
		this.items = [];
	}
enqueue(element)
{	
	this.items.push(element);
}
dequeue()
{
	return this.items.shift();
}
}


 const queue = new Queue();
queue.enqueue(1); 
queue.enqueue(3); 
queue.dequeue(); 
queue.getUnderlyingList() // returns { value: 3, next: null }
console.log(queue);