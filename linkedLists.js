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

  //insert at the head/first
  insertFirst (data) {
    this.head = new Node (data, this.head);
    this.size++;
  }

  //insert at the end
  insertLast (data) {
    let node = new Node (data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while(current.next) {
        current = current.next
      }

      current.next = node;
    }
    this.size++;
  }

  //insert at an index
  insertAt(data, index) {
    let node = new Node (data);
    let count = 0;
    let current, previous;
    current = this.head;

    //if the index is greater than the number of items in the linked list, then just return
    if (index > 0 && index > this.size) {
      return;
    }

    //if index is 0, insert at the head
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  //get a value at a certain index
  getAt (index) {
    let current = this.head;
    let count = 0;

    // if index is greater than number of items in the linked list, then just return
    if (index > 0 && index > this.size) {
      return;
    }

    // if index is 0, then return the value at head
    if (index === 0) {
      return current.data;
    }

    while (count < index) {
      current = current.next;
      count ++;
    }

    return current.data;
  }

  //remove at an index
  removeAt (index) {
    //if index is greater than number of items in the linked list, then just return
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let count = 0;
    let previous;

    //if index is at the head, then remove the head
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print all the list data
  printAllData () {
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(500);
ll.insertAt(1000, 2);
// console.log('getAt:', ll.getAt(10));
// ll.removeAt(3);
// ll.clearList();

ll.printAllData();