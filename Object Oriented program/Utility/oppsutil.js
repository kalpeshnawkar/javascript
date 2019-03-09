module.exports = {

    inventory(data) {
        var rice = data.rice
        var pulses = data.pulse
        var wheat = data.wheat
        var rname = 0
        var pname = 0
        var wname = 0
        var total;
        var valueofrice = 0;
        var valueofpulses = 0;
        var valueofwheat = 0
        try {
            for (let key in rice) {
                total = rice[key].weight * rice[key].price
                console.log('cost of ' + rice[key].Rname + " is" + total + " Rs")
                valueofrice = valueofrice + Total;
            }
            console.log("Value of rice is " + valueofrice)
            for (let key in pulses) {
                total = pulses[key].weight * pulses[key].price;
                console.log("const of " + pulses[key].Pname + " is" + total + " Rs")
                valueofpulses = valueofpulses + total
            }
            console.log("Values of pulses is " + valueofpulses)
            for (let key in wheat) {
                total = wheat[key].weight * wheat[key].price;
                console.log("const of " + wheat[key].Wname + " is" + total + " Rs")
                valueofwheat = valueofwheat + total
            }
            console.log("Values of Wheat is " + valueofwheat)

        }
        catch (e) {
            console.log(e)
        }

    },
    /**
     * program to replace a string by regex
     */
    /**
     * 
     * @param {string} name 
     * @param {string} fullname 
     * @param {number} contack 
     * @param {Date} date 
     */
    regexReplace(name, fullname, contack, date) {
        var readfile=require('fs')
        var read = require("readline-sync")
        var patt = /[a-zA-Z]/
        /**
         * create a while to check give name and fullname are correct or not
         */
        while (!patt.test(name) || !patt.test(fullname)) {
            console.log()
            console.log("Something Wrong")
            console.log()
            name = read.question("Enter the you Name[In Alphabets] : ")
            fullname = read.question("Enter the you Full Name[In Alphabets] : ")
        } //End of while loop
        /**
         * create a while to check give contack number are 10-digit or not
         */
        while (isNaN(contack) || contack.length != 10) {

            contack = read.question("Enter your contack number [upto 10 digit] : ")
        }//End of While loop
        console.log()
        /**
         * read a file  to replace a some string with given user values
         */
        var message =readfile.readFilesync('../regex/regexfile.txt')
        var replacemessage = message.replace(/<<name>>/i, name).replace(/<<full name>>/i, fullname).replace(/xxxxxxxxxx/i, contack).replace(/01|01|2016/i, date);
        console.log(replacemessage)
    }
}