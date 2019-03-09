/*Purpose      :prints the Calendar of the month        
* 
* @description
* 
* @file        :   calender.js
* @author      :   Kshiteej Nawkar <knawkar@gmail.com>
* @version     :   1.0
* @since       :   07/03/2019  */
var utility = require("../Utility/utility")
var take = require('util')
var read = require("readline-sync")
try {
    var month = +process.argv[2]
    var year = +process.argv[3]
    var day = ['Sun', 'Mon', 'Tue', 'Wen', 'Th', 'Fri', 'Sat']
    var date = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var a = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var firstday = utility.dayOfWeek(1, month, year)
    console.log("firstday is=" + day[firstday - 1])
    var leapyear = utility.leapyear1(year)
    console.log()
    if (leapyear == true) {
        date[2] = 29

    }
    take.print(a[month - 1] + " " + year)
    console.log()
    for (var i = 0; i < day.length; i++) {
        take.print(day[i] + "  ")
    }
    console.log()

    for (var i = 0; i < (firstday * 5); i++) {
        take.print(" ");
    }

    for (var i = 1; i <= date[month]; i++) {
        if (i < 10) {
            take.print(" " + i + "   ");
        }

        if (i > 9) {
            take.print("" + i + "   ")
        }
        if ((i + firstday) % 7 == 0) {
            console.log();
        }
    }

    console.log("\n\n");
}
catch (e) {
    console.log(e)
}