// Singly Linked List Implementation

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    add(data) {
      const newNode = new Node(data) //lets make a new node for the data

      /* set newNode to head if list is empty */
      if (this.head === null) {
        this.head = newNode;
      }
      else {
        /* lets add the newNode to the end if the list is not */
        currentNode = this.head;

        while (currentNode.next !== null) {
          currentNode = currentNode.next
        }
        
        currentNode.next = newNode
      }
      this.size++;
    }

    /* Given a value remove the node containing the data from the List */
    remove(data) {
      let currentNode = this.head; //set current node to head
      let previousNode = null; //temp var for the last node
      
      if (this === null) {
        return -1; //returns -1 if nothing deleted
      }
      /* find the node that the data is in and set it to currentNode. */
      /* set previousNode to the node before the currentNode. */
      while (currentNode.data !== data && currentNode.next !== null) {
        currentNode = currentNode.next; 
        previousNode = currentNode;
      }
      
      /* if the node is found, unlink it from the list and link the previous node to the next */
      if (currentNode.next !== null) {
        previousNode.next = currentNode.next;
        return 0;
      }

      return -1; //returns -1 if nothing deleted
    }
  }


