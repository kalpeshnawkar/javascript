
var file=require('fs')
var utility=require('../Utility/oppsutil')
var data=file.readFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/First.json','utf8');
var inobject=JSON.parse(data)
console.log("============================ Inventory Data Management of Rice, Pulses and Wheats==================================")
console.log()
utility.inventory(inobject)


