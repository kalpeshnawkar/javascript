var utility=require('../Utility/utility')
function user(){
    var read=utility.input();
    read.question("enter the name : ",function(name){
        utility.username(name),
        read.close();
    })
}
user();