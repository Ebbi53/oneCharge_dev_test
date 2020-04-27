class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // adds an element at the end of list 
    add(element) {
        // creates a new node 
        let node = new Node(element);

        // to store current node 
        let current;

        // if list is Empty add the element and make it head 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the list 
            while (current.next) {
                current = current.next;
            }

            // add node 
            current.next = node;
        }
        this.size++;
    }

    // insert element at the position index of the list 
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node 
            let node = new Node(element);
            let curr, prev;

            // add the element to the first index 
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;

                // iterate over the list to find the position to insert 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element 
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    // removes an element from the specified location 
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            let curr, prev, it = 0;
            curr = this.head;

            // deleting first element 
            if (index == 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the position to remove an element 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element 
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element 
            return curr.element;
        }
    }

    // removes a given element from the list 
    removeElement(element) {
        let current = this.head;
        let prev = null;

        // iterate over the list 
        while (current != null) {
            // comparing element with current element if found then remove it and return the element removed 
            if (current.element == element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    printMiddle() {
        let fast_ptr = this.head;
        let slow_ptr = this.head;

        if (this.head !== null) {
            while (fast_ptr !== null && fast_ptr.next !== null) {
                fast_ptr = fast_ptr.next.next;
                slow_ptr = slow_ptr.next;
            }
            let output = `Node ${slow_ptr.element} from this list (Serialization: [`; // generating the output
            let current = slow_ptr;
            while (current.next !== null) {
                output += current.element + ',';
                current = current.next;
            }
            output += current.element + '])'
            console.log(output);
        }
    }

}


(async function () {
    const readline = require('readline');

    var list, array;
    const rl = readline.createInterface({ //initializing the console input
        input: process.stdin,
        output: process.stdout
    });

    await new Promise((resolve, reject) => { //waiting for the input List
        rl.question('Enter the List: ', (ans) => {
            array = ans;
            resolve();
        })
    })

    array = JSON.parse(array); //parsing the input
    list = new LinkedList();

    array.forEach(el => {
        list.add(el);
    });

    list.printMiddle();

    rl.close(); //closing the console input stream
})();