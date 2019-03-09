class node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class linkedlist {
    constructor() {
        this.start = null;
        this.size = 0
    }
    add(data) {
        var n = new node(data);
        if (this.start == null) {
            this.start = n;
            this.size++;

        }
        else {
            var temp = this.start;
            while (temp.next) {
                temp = temp.next;
            }
            this.size++;

            temp.next = n;

        }

    }
    search(item) {
        if (this.start == null) {
            return false
        }
        else {
            var temp = this.start
            while (temp) {
                if (temp.data == item) {
                    return true
                }
                temp = temp.next
            }
            return false
        }

    }
    addToPos(data) {
        var temp = this.start;
        var prev = temp;
        if (data < temp.data) {
            this.insertFirst(data)
            return
        }
        var n = new node(data)
        while (temp.next)
            if (temp.data > data) {
                temp = prev

                temp = temp.next;
            }
            else {
                prev.next = n
                node.next = temp

                break;
            }

        if (!temp.next) {
            temp.next = n;
        }
        this.size++;
    }

    remove(data) {

        var temp = this.start;
        if (temp.data == data) {
            this.deleteFirst();
            return;
        }
        var prev = temp;
        while (temp) {
            if (temp.data == data) {
                prev.next = temp.next;
                this.size--;
                return temp.data;

            }

            prev = temp;
            temp = temp.next;
        }
        return null;
    }
    display() {
        var temp = this.start;
        var str = "";
        while (temp) {
            str = str + " " + temp.data;
            temp = temp.next;
        }
        return str;
    }
    isEmpty() {
        return this.size == 0;
    }

    insertFirst(element) {
        var node = new node(element)
        if (this.star == null) {
            this.start = node
            this.size++
            return;
        }
        else {
            node.next = start
            start = node

            this.size++
            return;
        }




    }
    deleteFirst() {
        if (this.start == null) {
            return;
        }
        else {
            var n = this.start.element
            this.start = this.start.next
            this.size--
        }
    }


    printList() {
        try {
            var curr = this.head;
            var str = "";
            while (curr) {
                str += curr.data + " ";
                curr = curr.next;
            }
            return str;
        } catch (error) {
            console.log(error.message);
        }
    }


    addele(data) {
        try {
            var node = new Node(data);
            var current = this.head;
            if (this.head == null) {
                this.head = node;
            } else {
                current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.size++;
        } catch (error) {
            console.log(error.message);
        }
    }
    removeItem(data) {
        try {
            var current = this.head;
            var prev = null;

            while (current != null) {

                if (current.data == data) {
                    if (prev == null) {
                        this.head = current.next;
                    } else {
                        prev.next = current.next;
                    }
                    this.size--;
                    return true;
                }
                prev = current;
                current = current.next;
            }
            return false;
        } catch (error) {
            console.log(error.message);
        }
    }


}

module.exports = {
    linkedlist
}