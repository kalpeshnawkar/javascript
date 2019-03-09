class queue {
    constructor() {

        this.front = -1;
        this.rear = -1;
        this.capacity;
        this.size = 0
        this.arr = []
    }
    queue(capacity) {
        this.capacity = capacity;
        var t = new arr[capacity]
    }
    enqueue(data) {
        if (this.capacity == this.rear + 1) {
            Console.log("Queue is overflow")
            return;
        }

        if (this.front == -1) {
            this.front++
        }
        this.arr[++this.rear] = data
        this.size++;


    }


dequeue()
{
    if (this.front == -1) {
        console.log("queue is empty")
        return null
    }
    var ele = this.arr[this.front++];
    this.size--

    if (this.front > this.rear) {
        this.front = this.rear = -1;

    }
    return ele;

}

getSize()
{
    return this.size;

}
isFull()
{
    if (size == capacity) {
        console.log("Queue is full")
    }
    else {
        console.log("not full")
    }

}
isEmpty(){
    if (size == 0) {
        console.log("Queue is empty")

    }
    else {
        console.log("not empty")
    }
}


    getelement()
    {
        var curr = this.head;
        var str="";
        while (curr)
        {
            str=str+curr.element;
            if(curr.next!=null)
            {
                str=str+"";

            }
            curr=curr.next;
        }
        return str;
    }
    
    
}
class Node
{
    constructor(element)
    {
        this.element=element;
        this.next=null;
    }
}
class QueueLinked
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }

    enqueue(element)
    {
        var n =new Node(element)
        if(this.head==null)
        {
            this.head=n;
            this.size++;
            return
        }
        else
        {
            var current=this.head;
            while(current.next)
            {
                current=current.next
            }
            this.size++;
            current.next=n;
        }
    }

    dequeue()
    {
        if(this.size==0)
        {
            console.log("Queue is empty");
            return;
        }
        var n = this.head.element;
        this.head=this.head.next;
        this.size--;
        return n;
    }
    print() {
        try {
          var string = "";
          var temp = this.head;
          while (temp) {
            string = string + " " + temp.data;
            temp = temp.next;
          }
          return string;
        } catch (error) {
          console.log(error.message);
        }
      }
      
    getelement()
    {
        var curr = this.head;
        var str="";
        while (curr)
        {
            str=str+curr.element;
            if(curr.next!=null)
            {
                str=str+"";

            }
            curr=curr.next;
        }
        return str;
    }

    size()
    {
        return this.size;
    }
    isEmpty()
    {
        if(this.size=0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    displayAnagram(){
        if(this.head==null){
            console.log("No element present ");
            return;
        }
        console.log(" The numbers which are Prime and anagram ");
        var pre=this.head;
        var curr=pre.next;
        var dis=require('util');
    
        while(curr){
               dis.print(pre.element);
            if(pre.next!=null){
                dis.print(" ==> ")
            }
            dis.print(curr.element);
            dis.print(',');
            pre=curr;
            curr=curr.next;
        }
    
    }
    addAscending(){
        var main=this.head;
          var mainHead=null;
        while(main){
         var n=new Node(main.element);
         var flag=true;
         if(mainHead==null){
           
             mainHead=n;
          this.head=mainHead;
    
         }else{
             var pre=mainHead,curr=mainHead;
             if(curr.next==null){
                 if(n.element<curr.element){
                     n.next=curr;
                     mainHead=n;
                     flag=false;
                 }
             }
             while(curr&&flag){
               if(n.element<curr.element){
                   pre.next=n;
                   n.next=curr;
                   flag=false;
               }
    
                 pre=curr;
                 curr=curr.next;
             }
             if(flag){
                 pre.next=n;
             }
         }
         
            main=main.next;
    
        }
        return this.head=mainHead;
    }
    getData(){
        var curr=this.head;
        var str="";
        while(curr){
            str=str+curr.element;
            if(curr.next!=null){
                str=str+" ";
            }
            curr=curr.next;
        }
        return str;
    }
    makeBlank(){
        this.head=null;
    }
    
}
module.exports = { queue,QueueLinked,

    monthof(m) {
        switch (m) {
            case 1: return 31;
                break;
            case 2: return 28;
                break;
            case 3: return 31;
                break;
            case 4: return 30;
                break;
            case 5: return 31;
                break;
            case 6: return 30;
                break;
            case 7: return 31;
                break;
            case 8: return 31;
                break;
            case 9: return 30;
                break;
            case 10: return 31;
                break;
            case 11: return 30;
                break;
            case 12: return 31;
                break;

        }
    }

}