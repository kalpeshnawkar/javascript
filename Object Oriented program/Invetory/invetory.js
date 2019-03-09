/*Purpose      :    read a JSON File
* 
* @description
* 
* @file        :   inventory.js
* @overview    :   Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg.
                    and create object for JSON file and Calculate the value for every Inventory. 
                               
* @author      :   Kshiteej Nawkar <knawkar@gmail.com>
* @version     :   1.0
* @since       :   09/03/2019  */
var file=require("fs")
var utility=require('../Utility/firstutil')
function inventory(){
try{
//var Data=file.readFileSync("/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/First")
var data=file.readFileSync('../home/admin1/Documents/JSON_file/First.json');
var inobject=JSON.parse(data)
console.log(inobject)
}
catch(e)
{
    console.log(e)
}
}
inventory()