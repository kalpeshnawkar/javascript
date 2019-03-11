var read = require("readline-sync")
var file = require("fs")
class inventoryfactory {

    add(data){
        var rice = data.Rice
        var pulses = data.Pulses
        var wheat = data.Wheat
        try{
        
       
        while (option != 4) {
            console.log("press 1 for Rice")
            console.log('press 2 for Pulses ')
            console.log("press 3 for Wheat")
            console.log("press 4 for Exit")
            console.log()
            var option = read.questionInt("Enter the option (In number) : ")
            console.log()
            switch (option) {
                case 1:
                    console.log("+++++++++++++Addition of Rice++++++++++++")
                    console.log()
                    var ricename = read.question("Enter the Name of rice :")
                    var weight = read.question("Enter the weight of rice in kg : ")
                    var price = read.question("Enter the price of rice in rupees : ")
                    rice.push({ "Rname": ricename, "Weight": weight, "price": price })
                    console.log()
                    file.writeFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/First.json',JSON.stringify(data));

                    break;
                case 2:
                console.log("+++++++++++++Addition of Pulses++++++++++++")
                console.log()
                    var pulsesname = read.question("Enter the Name of pulses :")
                    var weight = read.question("Enter the weight of pulses in kg : ")
                    var price = read.question("Enter the price of pulses in rupees : ")
                    pulses.push({ "Pname": pulsesname, "Weight": weight, "price": price })
                    console.log()
                    file.writeFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/First.json',JSON.stringify(data));
                    break;
                case 3:
                console.log("+++++++++++++Addition of Wheat++++++++++++")
                console.log()
                    var wheatname = read.question("Enter the Name of wheat :")
                    var weight = read.question("Enter the weight of wheat in kg : ")
                    var price = read.question("Enter the price of wheat in rupees : ")
                    wheat.push({ "Wname": ricename, "Weight": weight, "price": price })
                    console.log()
                    file.writeFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/First.json',JSON.stringify(data));
                    break;
                case 4:
                    break;
                default:
                    console.log("Enter the correct option : ")
                    break;
            }
        }
    }
    catch(e){
        console.log(e);
    }
    }
    remove(data){
        try{
            while (option != 4) {
                console.log("press 1 for Rice")
                console.log('press 2 for Pulses ')
                console.log("press 3 for Wheat")
                console.log("press 4 for Exit")
                console.log()
                var option = read.questionInt("Enter the option (In number) : ")
                console.log()
                switch (option) {
                    case 1:
                    console.log("+++++++++++++Removing of Rice++++++++++++")
                    console.log()
                        var name=read.question("enter the name of rice to remove : ");
                        for(let i=0;i<data.Rice.length;i++){
                            if(data.Rice[i].Rname==name){
                                var index = data.Rice.indexOf(data.Rice[i]);
                                data.Rice.splice(index, 1);
                            }
                            else{
                                console.log("No such a item is here.")
                            }
                        }
                            /**
                            * Use function JSON.stringify() to convert data into a string and write it to JSON file
                            */
                            file.writeFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/First.json',JSON.stringify(data));
                        break;
                    case 2:
                    console.log("+++++++++++++Removing of Pulses++++++++++++")
                    console.log()
                    var name=read.question("enter the name of pulses to remove : ");
                    for(let i=0;i<data.Pulses.length;i++){
                        if(data.Pulses[i].Pname==name){
                            var index = data.Pulses.indexOf(data.Pulses[i]);
                            data.Pulses.splice(index, 1);
                        }
                        else{
                            console.log("No such a item is here.")
                        }
                    }
                        /**
                        * Use function JSON.stringify() to convert data into a string and write it to JSON file
                        */
                       file.writeFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/First.json',JSON.stringify(data));
                         break;
                    case 3:
                    console.log("+++++++++++++Removing The Wheat++++++++++++")
                    console.log()
                    var name=read.question("enter the name of wheat to remove : ");
                    for(let i=0;i<data.Wheat.length;i++){
                        if(data.Wheat[i].Wname==name){
                            var index = data.Pulses.indexOf(data.Pulses[i]);
                            data.Pulses.splice(index, 1);
                        }
                        else{
                            console.log("No such a item is here.")
                        }
                    }
                        /**
                        * Use function JSON.stringify() to convert data into a string and write it to JSON file
                        */
                       file.writeFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/First.json',JSON.stringify(data));
                        break;
                    case 4:
                        break;
                    default:
                        console.log("Enter the correct option : ")
                        break;
                }
           
            /**
            * Loop over the data in the JSON file and search for the name given by the user,
            * remove it from the file.
            */
           
            }
        }
        catch(error){
            console.log(error.message);
            
        }
    }
    print(data) {
        var rice = data.Rice
        var pulses = data.Pulses
        var wheat = data.Wheat
        for (const key in rice) {
          console.log(rice[key]);
        }
        for (const key in pulses) {
            console.log(pulses[key]);
          }
          for (const key in wheat) {
            console.log(wheat[key]);
          }
    }
}  

 



module.exports = {
    inventoryfactory
}