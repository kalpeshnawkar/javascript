/*Purpose      :prints the Calendar of the month        
* 
* @description
* 
* @file        :   stackcal.js
* @author      :   Kshiteej Nawkar <knawkar@gmail.com>
* @version     :   1.0
* @since       :   07/03/2019  */
var access = require('./DSutility/stack');
var access1 = require('./DSutility/queue');
var utility=require('../Utility/utility')
var readline = require('readline-sync');
var take=require('util');
/**
 * function defination.
 */
function calender() {
    var month = +process.argv[2];
    var year = +process.argv[3];
    var answer = utility.dayOfWeek(Number(1), Number(month), Number(year));
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var months=["", "Jan", "Feb", "March", "April", "May", "Jun", "July", "Augest", "Sept", "Oct", "Nov", "Dec"];
    console.log("First day is : "+week[answer])
    var leap = utility.leapyear1(year);
    console.log()
    take.print(months[month] + " " + year)
    console.log()
    if (leap = true) {
        dates[2] = 29;
     }
    var dayQue=new access1.queue;
    var dateQue=new access1.queue;
    var stk=new access.stack;
    var stk1=new access.stack;
    for(let i=0; i<7;i++)
     {
        dayQue.enqueue(week[i]);     /*enqueue a all week  in queue from week[](array)*/
        
       stk.push(dayQue.dequeue());  /* pushing all week in stack from queue*/
       
     }
    for (let j=1;j<=dates[month]; j++)
     {
        dateQue.enqueue(j);
        stk1.push(dateQue.dequeue());
     }
    var rstk = stk.reversStack();
    
        var rstk1 = stk1.reversStack();
        for (let k = 0; k < 7; k++) {
            take.print(" " + rstk.pop());
         }
        console.log();
        for (let j = 0; j < (answer * 4 + 2); j++) {
            take.print(" ");
         }
        for (let j = 1; j <= dates[month]; j++) {
            var ch = rstk1.pop();
            if (ch < 10)
            take.print(ch, "   ");
            else {
                take.print(ch, "  ");
             }
            if ((answer + ch) % 7 == 0) {
                console.log();
                take.print("  ");
             }
        }
console.log("\n\n");
}
/**
 * function calls.
 */
calender();