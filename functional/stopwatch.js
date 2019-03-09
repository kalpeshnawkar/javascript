var utility = require('../Utility/utility')
const read = require('readline-sync')
function stopw() {
    var start = 0, stop = 0;
    var time1 = read.question("Press enter to start timer : ");
    {
        var time2 = 0;
        start = utility.stopWatch();
        var time2 = read.question("Press enter to stop timer : ");
        {
            stop = utility.stopWatch();
            console.log("elapsed time is : " + (stop - start) + " seconds");
        }
    }

}
stopw();