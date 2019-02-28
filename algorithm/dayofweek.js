var dayof=require('../Utility/utility')
const readline=require('readline-sync')
function dayOfWeek() {
    var d = +process.argv[2];
    var m = +process.argv[3];
    var y = +process.argv[4];
    var num = dayof.dayOfWeek(d, m, y);
    var res = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
    if (num <= res.length) {
        console.log("The day falls on :" + res[num]);
    }
    else {
        console.log("Invalid day ");

    }
}
dayOfWeek();