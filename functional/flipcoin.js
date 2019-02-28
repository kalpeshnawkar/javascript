var utility=require('../Utility/utility')
function flip()
{
    var read=utility.input();
    read.question("ENter the number : ",function(n){
        utility.flipcoin1(n),
        read.close();
    })
}
flip();