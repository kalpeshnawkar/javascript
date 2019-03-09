var file=require("fs")
var utility=require('../Utility/oppsutil')
function inventory(){
try{
var data=file.readFileSync('../JSON_File/First');
var inobject=JSON.parse(data)
utility.inventory(inobject)
}
catch(e)
{
    console.log(e)
}
}
inventory()