var read = require('readline-sync')
var jsonfile = require('fs');
var access=require('./inventoryfactory')
var utility=require('../Utility/oppsutil')
function main() {
    try {
        var readjson = jsonfile.readFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/First.json','utf8')

        var data = JSON.parse(readjson)
        var object = new access.inventoryfactory();
        console.log("=========================Inventory Management============================")
        while (option != 5) {
            console.log()
            console.log("Press 1 For Add")
            console.log("Press 2 for Remove ")
            console.log("Press 3 For print")
            console.log("press 4 For calculation ")
            console.log("Press 5 for Exit")
            console.log()
            var option = read.questionInt("Enter the option (In number) : ")
            console.log()
            switch (option) {
                case 1:
                    object.add(data)
                    break;
                case 2:
                    object.remove(data)
                    break;
                case 3:
                    object.print(data)
                    break;
                case 4:
                    utility.inventory(data)
                    break;
                case 5:
                        console.log("Exiting........")
                    break;

                default:
                    console.log("Enter the correct option : ")
            }
        }
    }
    catch (e) {
        console.log(e)
    }
}
main()