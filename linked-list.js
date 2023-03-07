/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) return undefined;
    const removedNode = this.head;
    this.head = removedNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedNode.val;
  }

  getNode(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let current = this.head;
    let count = 0;
    while (count !== idx) {
      current = current.next;
      count++;
    }
    return current;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this.getNode(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    const current = this.getNode(idx);

    if (current.val !== null) {
      current.val = val;
      return true;
    }
    return false;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.getNode(idx - 1);
    const temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
        return null;
    }

    if (this.length === 1) {
        const val = this.head.val;
        this.head = null;
        this.tail = null;
        this.length--;
        return val;
    }

    if (idx === 0) {
        const val = this.head.val;
        this.head = this.head.next;
        this.length--;
        return val;
    }

    let curr = this.head;
    for (let i = 0; i < idx - 1; i++) {
        curr = curr.next;
    }

    const val = curr.next.val;
    curr.next = curr.next.next;

    if (idx === this.length - 1) {
        this.tail = curr;
    }

    this.length--;
    return val;
}


  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }

    let sum = 0;
    let curr = this.head;
    while (curr !== null) {
      sum += curr.val;
      curr = curr.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
