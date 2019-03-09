/*Purpose      :Panel to add People to Queue to Deposit or Withdraw Money and dequeue               
* 
* @description
* 
* @file        :   bank.js
* @author      :   Kshiteej Nawkar <knawkar@gmail.com>
* @version     :   1.0
* @since       :   07/03/2019  */
var read = require('readline-sync')
var queue = require('./DSutility/queue')
var queue1 = require('./DSutility/queue')
try {
    var que = new queue.queue();
    var que1 = new queue1.queue();
    var Total_balance = 1000;
    var size;
    var put = []
    var put1 = []
    console.log("======================Banking Cash Counter========================")
    console.log()
    var people = read.questionInt("Enter the Number of people : ")
    var flag = true;
    var amt = Total_balance;
    for (var i = 1; i <= people; i++) {
        put1 = que1.enqueue(i);
    }
    size = que1.getSize();
    console.log(size + " people are added in queue ")
    if (people > 0) {

        for (var i = 1; i <= people; i++) {
            console.log('Enter the choice\n')
            var choice = read.questionInt("1.Banking  2.Check Balance. 3.Exit\n ")
            console.log();
            switch (choice) {
                case 1:
                     var a = read.questionInt('press 1 for deposite a amount\npress 2 for withdrawa a amount\n')
                    switch(a) {

                        case 1:
                            var amount = read.questionInt("Enter the amount to Deposite : ")
                            var put = que.enqueue(Number(amount))
                            Total_balance = Number(amt) + Number(amount)
                            console.log("Tranction Success");
                            console.log("Toala_Balance is " + Total_balance)
                            
                            que1.dequeue();
                            console.log(i + " people is removed from queue")
                            size = que1.getSize();
                            console.log('Now ' + size + ' people in queue')
                            flag = true
                            break;

                        case 2:
                            var amount = read.questionInt("Enter the amount to withdraw : ")
                            if (Total_balance > amount) {
                                put = que.enqueue(Number(-amount))
                                Total_balance = Number(amt) - Number(amount);
                                console.log("Toala_Balance is " + Total_balance)
                                console.log("Tranction Success");
                                que1.dequeue(i);
                                console.log(i + " people is removed from queue")
                                size = que1.getSize();
                                console.log(size + " people are added in queue ")
                                flag = true
                                
                            }
                            else {
                                console.log("Balance is not available, plz enter valid amount")
                                flag = true;
                                
                            }
                            break;
                            
                        default:
                            console.log("Enter the valid key")
                            continue;


                    }
                    break;
                case 2:
                    console.log(" your Total Balance is " + Total_balance);
                    que1.dequeue(i);
                    console.log(i + "people is removed from queue")
                    size = que1.getSize();
                    console.log(size + "people are added in queue ")
                    break;
                case 3:
                    break;
                default:
                    console.log("Enter the valide option")
                    break;
            }
        }
    }
    if (flag) {
        var addition = 0
        for (var i = 0; i < people; i++)
            addition = addition + que.dequeue()
        console.log(" your addition is " + addition)
    }
}
catch (e) {
    console.log(e)
}

