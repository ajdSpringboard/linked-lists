class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    pop() {
        if (!this.head) throw new Error("List is empty.");

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

    shift() {
        if (!this.head) throw new Error("List is empty.");

        const oldHead = this.head;
        this.head = oldHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return oldHead.val;
    }

    getAt(idx) {
        if (idx < 0 || idx >= this.length) throw new Error("Invalid index.");

        let current = this.head;
        let counter = 0;
        while (counter !== idx) {
            current = current.next;
            counter++;
        }

        return current.val;
    }

    setAt(idx, val) {
        if (idx < 0 || idx >= this.length) throw new Error("Invalid index.");

        let current = this.head;
        let counter = 0;
        while (counter !== idx) {
            current = current.next;
            counter++;
        }

        current.val = val;
    }

    insertAt(idx, val) {
        if (idx < 0 || idx > this.length) throw new Error("Invalid index.");

        if (idx === 0) return this.unshift(val);
        if (idx === this.length) return this.push(val);

        const newNode = new Node(val);
        let current = this.head;
        let prev = null;
        let counter = 0;
        while (counter !== idx) {
            prev = current;
            current = current.next;
            counter++;
        }

        newNode.next = current;
        prev.next = newNode;
        this.length++;
    }

    removeAt(idx) {
        if (idx < 0 || idx >= this.length) throw new Error("Invalid index.");

        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        let current = this.head;
        let prev = null;
        let counter = 0;
        while (counter !== idx) {
            prev = current;
            current = current.next;
            counter++;
        }

        prev.next = current.next;
        this.length--;

        return current.val;
    }

    average() {
        if (this.length === 0) return 0;

        let sum = 0;
        let current = this.head;

        while (current) {
            sum += current.val;
            current = current.next;
        }

        return sum / this.length;
    }
}

module.exports = LinkedList;
