var utility=require('../Utility/utility')
var read=require('readline-sync')
var choice=0;
choice=read.questionInt("Enter 1 for binarySearch for Integer\nEnter 2 for binarysearch for String\nEnter 3 for Insertionsort for Integer\nEnter 4 for Insertionsort for String\nEnter 5 for bubblesort for Integer\nEnter 6 for binarySearch for String\n")
switch(choice)
{
    case 1:
        console.log('1: binarySearch for Integer')
        num=read.questionInt('Enter the size of array : ')
        var arr=[]
        arr=utility.createArray(num)
        var time1=read.question("Press enter to start timer : ");
       var start=utility.stopWatch();
        var a=utility.binarySearchInt(arr,num)
        if(a>=0)
        {
            console.log("number Found : "+arr[a]+" at location "+a);
        }
        else
        {
            console.log("Invalid");
        }
        var time2=read.question("Press enter to start timer : ");
        var stop=utility.stopWatch();
        console.log("elapsed time is : "+(stop-start)+" seconds");
        break;


    case 2:
        console.log("2:  binarysearch for String ")
        num=read.questionInt('Enter the size of array : ')
        var arr=[]
        arr=utility.createArraystring(num)
       
        var time1=read.question("Press enter to start timer : ");
        var start=utility.stopWatch();
        b =utility.binarySearchString(arr,num)
        if(b>=0)
        {
            console.log("String Found :"+arr[b]+" at location "+b);
        }
        else
        {
            console.log("Invalid");
        }
        var time2=read.question("Press enter to start timer : ");
        var stop=utility.stopWatch();
        console.log("elapsed time is : "+(stop-start)+" seconds");
        break;


    case 3:
        console.log("3:  Insertionsort for Integer ")
        num=read.questionInt('Enter the size of array : ')
        var arr=[]
        arr=utility.createArray(num)
        var time1=read.question("Press enter to start timer : ");
        var start=utility.stopWatch();
        arr =utility.insertionsort(arr,num)
        console.log(arr)
        var time2=read.question("Press enter to start timer : ");
        var stop=utility.stopWatch();
        console.log("elapsed time is : "+(stop-start)+" seconds");
        break;
     
    case 4:
        console.log("4:  Insertionsort for String ")
        num=read.questionInt('Enter the size of array : ')
        var arr=[]
        arr=utility.createArraystring(num)
        var time1=read.question("Press enter to start timer : ");
        var start=utility.stopWatch();
        arr =utility.insertionsort(arr,num)
        console.log(arr)
        var time2=read.question("Press enter to start timer : ");
        var stop=utility.stopWatch();
        console.log("elapsed time is : "+(stop-start)+" seconds");
        break;
      
    case 5:
        console.log("5:  Bubblesort for Integer")
        num=read.questionInt('Enter the size of array : ')
        var arr=[]
        arr=utility.createArray(num)
        var time1=read.question("Press enter to start timer : ");
        var start=utility.stopWatch();
        arr =utility.bubblesort(arr,num)
        console.log(arr)
        var time2=read.question("Press enter to start timer : ");
        var stop=utility.stopWatch();
        console.log("elapsed time is : "+(stop-start)+" seconds");
        break;
      
    case 6:
        console.log("6:  Bubblesort for String ")
        num=read.questionInt('Enter the size of array : ')
        var arr=[]
        arr=utility.createArraystring(num)
        var time1=read.question("Press enter to start timer : ");
        var start=utility.stopWatch();
        arr =utility.bubblesort(arr,num)
        console.log(arr)
        var time2=read.question("Press enter to start timer : ");
        var stop=utility.stopWatch();
        console.log("elapsed time is : "+(stop-start)+" seconds");
        break;
       
        

}