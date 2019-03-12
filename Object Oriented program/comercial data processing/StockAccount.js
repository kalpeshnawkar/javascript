var read = require('readline-sync')
var file = require('fs')
class StockAccount {
    /**
     * 
     * @param {string} Companydata 
     * @param {string} Customerdata 
     */
    constructor(Companydata, Customerdata) {
        /**
         * constructor of parameter are refering to class StockAccount
         */
        this.Companydata = Companydata
        this.Customerdata = Customerdata
    }
    /**
     * function for create new account 
     */
    createAccount() {
        try {
            var customer = this.Customerdata.Customer
            /**
             * Getting a details from new customer
             */
            var name = read.question("Enter the your Name : ")
            var id = read.questionInt("Enter your id : ")
            var share = read.questionInt("Enter Number of Share : ")
            console.log("Creating Account.........")
            /**
             * pushing a new customer details in list
             */
            customer.push({ "Name": name, "ID": id, "Share": share })
            /**
             *  Stringify the object and write it to json file.
             */
            file.writeFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/customer.json', JSON.stringify(customer));
            console.log("Account Created")
            console.log()
        }
        catch (e) {
            console.log()
        }

    }
    /**
     * function for buy a share
     */
    buy() {
        /**
         * printing a detalis of Customer 
         */
        console.log("++++++company Details++++++")
        console.log()
        console.log(this.Customerdata)
        var customerbuy = this.Customerdata.Customer
        var id = read.questionInt("Enter Your ID :")


        for (let key in customerbuy) {
            /**
             * cheack whether customer id is present or not 
             */
            var flag = true;
            if (customerbuy[key].ID == id) {
                var index = customerbuy.indexOf(customerbuy[key])
                console.log(customerbuy[key].ID)
                console.log(customerbuy[key].Name)
                console.log()
                /**
                 * printing a company datails to buy a share 
                 */
                console.log()
                console.log("++++++company Details++++++++++++")
                console.log()
                console.log(this.Companydata)
                /**
                 * checkling company name/symbol correct or not
                 */
                // flag = true;
                // while (flag == true){
                    var companyname = read.question("Enter Name/symbol of Comany : ")
                    var companybuy = this.Companydata.CompanyList
                    for (let key in companybuy){
                        /**
                         * cheack whether comany name/symbol present or not
                         */
                        if(companybuy[key].CompanyName == companyname||companybuy[key].Symbol == companyname) {
                            var flag1 = false
                            flag = false
                            console.log("hii")
                            /**
                             * printing a company Details
                             */
                            console.log(companybuy[key].CompanyName)
                            console.log(companybuy[key].Share)
                            do {
                                var share = read.question('How much you want to buy a share : ')
                                /**
                                 * cheack whether share less than company share 
                                 */
                                if (share > companybuy[key].Share) {
                                    console.log("Share should be less than Company Share")
                                }
                                else {
                                    flag1 = true
                                }
                            } while (!flag1)
                            /**
                             * print company name, customer name and share for conformation
                             */
                            var output = "Customer Name is " + customerbuy[key].Name + " and Comapany Name is "
                                + companybuy[key].CompanyName + " buying a " + share + " share"
                            console.log()
                            console.log(output)
                            console.log()
                            var date = new Date();
                            /**
                             * calculate a price of share 
                             */
                            var totalprice = share * companybuy[key].Price
                            /**
                             * increase a balance of company
                             */
                            companybuy[key].Balance = companybuy[key].Balance + totalprice
                            companybuy[key].share = companybuy[key].share - share
                            /**
                             *update  customer Details
                             */
                            customerbuy[index].Amount = customerbuy[index].Amount - totalprice
                            customerbuy[index].share = customerbuy[key].share -share
                            customerbuy[index].Last_Transaction=date
                            file.writeFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/companylist.json', JSON.stringify(companybuy));
                            file.writeFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/customer.json', JSON.stringify(customerbuy));

                            
                            break;
                        }
                        else {
                            flag = true
                            console.log("Please, Enter correct company name/symbol")

                      //  }
                    }

                }
            }
        }

    }

    print(data, option) {

        var company = data.CompanyList
        if (option == 1)
            console.log(company[0]);
        else
            console.log(company[1])
    }
}
module.exports = {
    StockAccount
}