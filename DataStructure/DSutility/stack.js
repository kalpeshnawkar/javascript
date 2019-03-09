class stack {
    constructor() {
        this.top = -1;
        this.capacity;
        this.size = 0
        this.arr = []
    }
    stack(capacity) {
        this.capacity = capacity;
        var t = new arr[capacity]
    }
    push(data) {

        if (this.capacity == this.top + 1) {
            Console.log("Stack is overflow")
            return null
        }
        else {
            this.arr[++this.top] = data
            this.size++;
            return this.arr

        }

    }
    pop() {
        if (this.top == -1) {
            //console.log("stack is empty")
            return null
        }
        else
            var ele = this.arr[this.top--]
        this.size--
        return ele;
    }
    peak() {
        if (this.top == -1)
            console.log("stack is empty");
        else
            console.log(this.items[top]);
    }

    isEmpty() {
        if (this.size == 0) {
           // console.log("stack is empty")
            return true;
        }
        else {
           // console.log("not empty")
            return false
        }

    }
    getSize() {
        return this.size
    }
    display() {
        var str =''
        for (var i; i < this.size; i++){
            str = str + " " +this.arr[i];
            
        }
        
            return str
    }
    reversStack() {
        var newstack = new stack;
        var n = this.getSize();
        for (let index = 0; index < n; index++) {
            newstack.push(this.pop());
        }
        return newstack;

    }

}

module.exports = {
    stack

}