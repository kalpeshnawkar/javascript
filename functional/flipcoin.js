var utility=require('../Utility/utility')
function flip()
{
    var read=utility.input();
    read.question("How Many Times Flip The Coin : ",function(n){
        utility.flipcoin1(n),
        read.close();
    })
}
flip();
