/*Purpose      :prints the prime number      
* 
* @description
* 
* @file        :   primednum.js
* @author      :   Kshiteej Nawkar <knawkar@gmail.com>
* @version     :   1.0
* @since       :   07/03/2019  */
try {
  var take = require("util");
  var utility = require("../DataStructure/DSutility/Numutil");
  var primes = [[], [], [], [], [], [], [], [], [], []];
  var initial = 0;
  var final = 100;
  console.log("Prime Numbers in the given range are :\n");
  /*
   * Loop from 0 to 10 and stores the prime numbers and stores the values in each index.
   */
  for (let index = 0; index < 10; index++) {
    primes[index] = utility.isPrimes(initial, final);
    initial = initial + 100;
    final = final + 100;
  }
  var start = 0;
  var end = 100;
  /*
   * To print the prime numbers in the range 0-­100,100­-200, and so on.
   */
  for (let index1 = 0; index1 < 10; index1++) {
    take.print(
      "[" +
      "[" +
      start +
      "-" +
      end +
      "]" +
      "    " +
      "[" +
      primes[index1] +
      "]" +
      "]"
    );
    start = start + 100;
    end = end + 100;
    console.log();
  }
  console.log("\n");
}
catch (error) {
  console.log(error.message);
}