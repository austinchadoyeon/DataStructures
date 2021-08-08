class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst (data) {
    this.head = new Node (data, this.head);
    this.size++;
  }
}

let ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);

console.log(ll);