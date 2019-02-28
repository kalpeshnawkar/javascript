var utility=require('../Utility/utility')
function harmonic()
{
    var read=utility.input();
    read.question('Enter the number :',function(n){
        utility.harmonicseries(n),
        read.close();
    })
}
harmonic();