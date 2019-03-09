/*Purpose      : push open parenthesis “(“ and pop closed parenthesis “)” in a stack.
                 At the End of the Expression if the Stack is Empty then the Arithmetic Expression is Balanced.
* 
* @description
* 
* @file        :   balancepar.js
* @author      :   Kshiteej Nawkar <knawkar@gmail.com>
* @version     :   1.0
* @since       :   07/03/2019  */
var read = require('readline-sync')
var stack = require('./DSutility/stack')
var stack1 = new stack.stack();
try {
    var exp = read.question("Enter the expression")
    for (var i = 0; i < exp.length; i++) {
        var ch = exp.charAt(i);
        if ((ch == '[') || (ch == '(') || (ch == '{')) {
            var str = stack1.push(ch);

        }
        else {
            var str1 = stack1.pop();

        }
    }
    if (stack1.getSize() == 0) {
        console.log("Arithmetic Expression is Balanced");
    }
    else
        console.log("Arithmetic Expression is not Balanced")
}
catch (e) {
    console.log(e)
}

