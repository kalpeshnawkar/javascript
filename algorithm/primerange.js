var  utility=require('../Utility/utility')
function prime()
{
    var read=utility.input();
   
    read.question("enter the star range of prime:",function(n1){
        read.question("enter the end range of prime",function(n2){
        
                utility.algoprime(n1,n2);
                read.close()
            
        })
       })
     
}
prime();