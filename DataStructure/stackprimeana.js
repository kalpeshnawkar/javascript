var stackutil = require('./DSutility/stack')
var num = require('./DSutility/Numutil')
var take = require('util')
var stack1 = new stackutil.stack;
var arr = []
for (var prime = 2; prime < 1000; prime++) {
    if (num.isPrime(prime)) {
        arr.push(prime)
    }
    for (var i = 0; i < arr.length-1; i++) {
        for (var j =i+1; j < arr.length; j++) {
            if (num.isAnagram(arr[i], arr[j])) {
                stack1.push(arr[i])
               stack1.push(arr[j])

            }
        }

    }

}
console.log("after reversing stack, Number is prime and anagram both")
while (!stack1.isEmpty()) {
    take.print(' '+stack1.pop())
    
}




