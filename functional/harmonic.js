var utility=require('../Utility/utility')
var read=require('readline-sync')
function harmonic()
{
    //var read=utility.input();
    console.log('Harmonic series')
    var n=read.questionInt('Enter the range of harmonic series in number :')
        utility.harmonicseries(n)
}
harmonic();
        
    
