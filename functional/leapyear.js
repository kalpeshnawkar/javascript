var utility = require('../Utility/utility')
function leap() {
    var read = utility.input();
    read.question("Enter the year : ", function (year) {
        utility.leapyear1(year),
            read.close()
    })
}
leap();

