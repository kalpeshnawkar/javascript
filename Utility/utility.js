var c = require('util');
var read = require('readline-sync');

module.exports = {
    input() {
        var readline = require('readline');
        var main = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return main;
    },

    /********************************************Business logic*****************************************8**** */

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functional program 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~******************~*/

    username(name) {
        if (name.length > 3) {
            console.log("Hello " + name + ", How are you")
        }
        else {
            console.log('Name length should be greater than 3')
        }

    },

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functional program 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~****************/
    /* Flip Coin
   
   * @description : Declaring a function and passing the userinput for fliping the coin
   *                no of times
   * @function: flipcoin takes the no of times to flip coin and print the percentage of
   *            head and tail
   */

    flipcoin1(n) {

        var heads = 0, tails = 0
        for (var i = 0; i < n; i++) {
            if (Math.random() <= 0.5) {
                console.log("tails");
                tails++;

            }
            else {
                console.log("heads");
                heads++;
            }

        }
        var per_tail = tails / n * 100;
        var per_head = heads / n * 100;
        console.log("percentage of head is " + per_head);
        console.log("percentage of tails is " + per_tail);
    },


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functional program3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~***********8****/


    /*3. Leap year
   *--------------
   * @description : Declaring a function and passing the four digit number from  user input.
   *                
   */

    leapyear1(year) {
        if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
            console.log(year + " is a leap year");
            return true
        }
        else {
            console.log(year + " is not a leap year");
            return false
        }
    },


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functional program 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~***************8***/

    /* 4. Power of Two
    *------------------
    * @description : Prints the value of two's power*/

    power() {
        var n = process.argv[2]
        power = 1;
        for (var i = 0; i < n; i++) {
            console.log("2^" + i + " = " + power)
            power = power * 2;
        }
    },


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functional program 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* 5.Harmonic Series 
    *------------------
    * @description : get a number as a input and  Prints the series of harmonic upto input number 
    */


    harmonicseries(n) {
        var sum = 0.0
        for (var i = 1; i <= n; i++) {
            sum = sum + 1.0 / i;


        }

        console.log("sum of harmonic series is " + sum);
    },

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functional program  6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    /* 6. Prime Factor
   *------------------
   * @description :Computes the prime factorization of N using brute force. */
    primefactor(n) {
        console.log('prime factors of ' + n + ' is :')
        while (n % 2 == 0) {
            console.log("2 ")
            n /= 2;
        }
        for (var i = 3; i * i <= n; i++) {
            while (n % i == 0) {
                console.log(i + " ");
                n /= i;

            }
        }
        if (n > 2) {
            console.log(n);
        }
    },


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functional program 7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    /* 7. Gambler
 *------------------
 
 * @description : Simulates a gambler who start with $stake and place fair $1 bets until he/she goes broke 
 (i.e. has no money) or reach $goal. Keeps track of the number of times he/she wins and the number of bets he/she makes.
  Run the experiment N times, averages the results, and prints them out.*/



    gambler(stake, goal, bet) {
        var win = 0
        var loss = 0
        var cash = stake;
        for (var i = 1; i <= bet; i++) {
            while (cash > 0 && cash < goal) {
                if (Math.random() < 0.5) {
                    cash++

                }
                else {
                    cash--
                }
            }
            if (cash == goal) {
                win++
            }
            else {
                loss++
            }
        }


        var per_win = win / bet * 100;
        var per_loss = loss / bet * 100;
        //var per_loss=100-per_win
        //loss=bet-win;

        console.log("percentage of win is " + per_win);
        console.log("percentage of loss is " + per_loss);
        console.log("win " + win);
        console.log("loss :" + loss);







    },


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functional program  8~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    /* 8. Coupon Number
*------------------

* @description :Given N distinct Coupon Numbers, how many random numbers do you need to generate distinct coupon number?
This program simulates this random process. */




    generatecoupon(number) {
        var ar = [];
        for (var i = 0; i < number; i++) {
            ar[i] = Math.floor(Math.random() * number);
            for (var j = 0; j < i; j++) {
                if (ar[i] == ar[j]) {
                    i--;
                }
            }
        }
        console.log(ar);
    },
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functional program  9 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*****************/

    /* 9. 2 D Array
*------------------

* @description : A library for reading in 2D arrays of integers, doubles, or booleans from standard input
 and printing them out to standard output.*/



    twodarray(row, col) {

        var a = [];
        for (var i = 0; i < row; i++) {
            a.push([]);
            for (var j = 0; j < col; j++) {

                a[i][j] = read.questionInt(" enter the day of week : ");
            }

        }
        return a;

    },

    /** 2D logic  **/
    twodlogic(b) {
        for (var m = 0; m < b.length; m++) {
            console.log(b[m]);
        }


    },


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functional program  10~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    /* 10. sum of Three Integer
    *------------------
    
    * @description :A program with cubic running time. Read in N integers and counts the   number of triples 
    that sum to exactly 0. */



    threesum1(arr) {

        var l = arr.length;
        for (var i = 0; i < l - 2; i++) {
            for (var j = i + 1; j < l - 1; j++) {
                for (var k = j + 1; k < l; k++) {
                    if (arr[i] + arr[j] + arr[k] == 0) {
                        console.log(arr[i] + "," + arr[j] + "," + arr[k] + " is a triplet")
                    }


                }
            }
        }
    },

    /**************************************functional program 11**************************************8***8****8 */




    distance1() {
        var x = process.argv[2]
        var y = process.argv[3]
        var distance = Math.sqrt(x * x + y * y)
        console.log("distance from the point (" + x + "," + y + ") to the origin (0, 0) is " + distance)
    },

    /**************************************functional program 12**************************************8***8****8 */


    /* static permutation(s1,m,n)
      {
          if(m==n)
          {
              console.log(m);
          }
          else
          {
              for(var i=m;i<n;i++)
              s1=swap(s1,m,n)
              permutation(s1,m+1,n)
              s1=swap(s1,m,i)
          }
          function swap(s1,i,j)
          {
              var a=s1.toChraArray()
              var temp=a[i];
              a[i]=a[j]
              a[j]=temp;
              return String.value(a)
          }
  
      },*/


    /**************************************functional program 13**************************************8***8****8 */



    stopWatch() {
        var date = new Date();
        return date.getUTCSeconds();
    },





    /**************************************functional program 15**************************************8***8****8 */


    quadroot(a, b, c) {
        var delta = (b * b) - (4 * a * c);
        console.log(delta);
        if (delta == 0) {
            var root = -b / (2 * a);
            console.log(root);
        }
        else if (delta > 0) {
            var root1 = (-b + (Math.sqrt(delta))) / 2 * a;
            var root2 = (-b - (Math.sqrt(delta))) / 2 * a;
            console.log("First root " + root1);
            console.log("Second root " + root2);
        }
        else if (delta < 0) {
            var root1 = -b / 2 * a;
            var root2 = (Math.sqrt(-delta)) / 2 * a;
            console.log("First root : " + root1, "i :", root2);
            console.log("Second root : " + root1, "-i :", root2);
        }
        else {
            console.log("Invalid number");
        }
    },


    /***********************************function program 16************************8*****8******* */


    windchill() {
        var a = process.argv[2];
        var b = process.argv[3];
        if (a <= 50 && b > 3 && b < 120) {
            var w = 35.74 + 0.6215 * a + (0.4275 * a - 35.75) * Math.pow(b, 0.16);
            console.log("Windchill for temperature " + a + " and wind speed " + b + " is " + w);
        }
        else {
            console.log("Wrong temperature or wind speed");
        }
    },

    /*End of Functional program*/





    /*  Algorithm program*/


    /***********************************algorithm program 1*************************************************/


    algoanagram(s1, s2) {

        var l1 = s1.length
        var l2 = s2.length
        var flag = true
        if (l1 != l2) {
            flag = false
        }
        else {
            var s3 = s1.toLowerCase()
            var s4 = s2.toLowerCase()

            s3 = s3.split('').sort().join('');
            s4 = s4.split('').sort().join('');

            // console.log(s3);
            // console.log(s4);
            flag = s3 === s4;
            // var c=a.split(" ")
            // var c=b.split(" ")


            //console.log(c)
            //  console.log(d)





        }
        if (flag == true) {
            console.log(s1 + " and " + s2 + " are anagram")
        }
        else {
            console.log(s1 + " and  " + s2 + " are not  anagram")
        }
    },

    /***********************************algorithm program 2********************************** *************/


    algoprime(n1, n2)   //algoprogram2
    {
        var flag = true
        for (var i = n1; i <= n2; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = false
                    break
                }
                else {
                    flag = true
                }
            }
            if (flag == true) {
                console.log(i);
            }
        }
    },

    /***********************************algorithm program 5******************************************** */
    findNumber(low, high, readline) {
        var mid = low + Math.floor((high - low) / 2)
        //    console.log(mid)
        if (low < high) {
            if (low == high - 1) {
                var c;
                c = readline.question("Is the number " + low + " if yes, press 'Y'. Else Press 'N' : ")
                if (c == 'y')
                    return low;
                if (c == 'n')
                    return high;
            }
            c = readline.question("Is the number " + mid + -+high + " if yes, press 'Y'. Else Press 'N' : ")
            if (c == 'y')
                mid = this.findNumber(mid, high, readline)
            if (c == 'n')
                mid = this.findNumber(low, mid - 1, readline)
        }
        return mid;
    },

    /************************************algorithm program 7******************************/

    insertionsort(arr, num) {
        var a;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    a = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = a;
                }

            }
        }

        return arr;

    },


    /************************************algorithm program 8******************************/




    bubblesort(arr) {

        var a;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < (arr.length - i - 1); j++) {
                if (arr[j] > arr[j + 1]) {
                    a = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = a;
                }
            }
        }

        return arr

    },


    ///create array for sting///
    createArraystring(num) {

        var arr = [];
        for (var i = 0; i < num; i++) {
            arr[i] = read.question('Enter the ' + i + ' element    ');
            //  a.push(num);

        }
        return arr;
    },
    ////create array for Integer
    createArray(num) {

        var arr = [];
        for (var i = 0; i < num; i++) {
            arr[i] = read.questionInt('Enter the ' + i + ' element  : ');
            //  a.push(num);

        }
        return arr;
    },
    /*****************************algorithm program 9******************************************8***8*** */

    mergesort(arr) {
        if (arr.length === 1) {
            return arr;
        }
        const m = Math.floor(arr.length / 2);
        const left = arr.slice(0, m);
        const right = arr.slice(m);
        return this.merge(
            this.mergesort(left),
            this.mergesort(right)
        );

    },

    merge(left, right) {
        let result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    },


    /************************************algorithm program 10******************************/

    vendingMachine(amount, i, notes) {
        var arr = [1000, 500, 100, 50, 10, 5, 2, 1];
        if (amount == 0 && i == arr.length) {
            console.log("Total number of notes ", notes);
            return;
        }
        if (Math.floor(amount / arr[i]) > 0) {
            console.log(arr[i] + " notes is " + Math.floor(amount / arr[i]));
            notes = notes + Math.floor(amount / arr[i]);
            amount = amount % arr[i];
            this.vendingMachine(amount, i + 1, notes);
            return;
        }
        this.vendingMachine(amount, i + 1, notes);
    },
    /*******************************************algorithm program 11************************************* */



    dayOfWeek(d, m, y) {
        var y0 = y - Math.floor((14 - m) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
        var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
        return d0;
    },



    temperaturConversion(temp, i) {
        var ctof, ftoc;
        if (i == 1) {
            ctof = (temp * 9 / 5) + 32;
            console.log("Converting temperature from celsius to fahreinheit:" + ctof);
        }
        if (i == 2) {
            ftoc = (temp - 32) * 5 / 9;
            console.log("Converting temperature from fahreinheit to celsius:" + ftoc);
        }
    },



    /************************************algorithm program 13****************************************/


    payment(p, y, r) {
        var n = 12 * y;
        var r1 = r / (12 * 100);
        var res = (p * r1) / (1 - Math.pow(1 + r1, (-n)));
        console.log("Payment is : " + res);
    },


    /************************************algorithm program 14****************************************/


    newton(c) {
        if (c > 0) {
            var t = c;
            var epsilon = 1e-15;
            while (Math.abs(t - c / t) > epsilon * t) {
                t = (c / t + t) / 2;
            }
            console.log("square root of non negative number is : " + t);
        }
        else {
            console.log("Invalid or negative number");
        }
    },
    /************************************algorithm program 15****************************************/

    tobinary(n) {
        var arr = []
        var i = 0;
        var s = 0;
        while (n > 0) {
            arr[i] = n % 2;

            n = Math.floor(n / 2);
            i++
        }
        for (var j = arr.length - 1; j >= 0; j--) {
            s = s + arr[j] + " ";
        }
        console.log(s);


    },
    /************************************algorithm program 4****************************************/
    binarySearchInt(arr, num) {

        console.log("After sorted array");


        arr = this.bubblesort(arr);
        console.log(arr);

        var search_number = read.questionInt("Enter the number between :")

        var ub = arr.length - 1;
        var lb = 0
        //var mid=Math.floor(lb+ub)/2
        while (lb <= ub) {

            var mid = Math.floor((lb + ub) / 2)


            if (search_number == arr[mid]) {
                return mid;


            }
            else if (search_number < arr[mid]) {
                ub = mid - 1
            }
            else {
                lb = mid + 1
            }
        }
        return -1;
    },


    binarySearchString(arr, num) {

        console.log("After sorted array");


        var arr = this.bubblesort(arr);
        console.log(arr);

        var search_string = read.question("Enter the string between array :")

        var ub = arr.length - 1;
        var lb = 0

        while (lb <= ub) {

            var mid = Math.floor((lb + ub) / 2)


            if (search_string == (arr[mid])) {
                return mid;



            }

            else if (search_string.localeCompare(arr[mid]) == -1) //if search_string < arr[mid]==-1 
            {
                ub = mid - 1
            }
            else {
                lb = mid + 1
            }
        }
        return -1;
    },

    /************************************algorithm program 6****************************************/
    fileCall(path) {
        var file = require('fs')
        var data = file.readFileSync(path, 'utf8');
        var arr = data.toLowerCase();
        
        arr = arr.trim().split(" ")
        
        
        return arr

    },




    writeFile(filename,Data)
    {
        const fs = require('fs')
        fs.writeFileSync(filename,Data)
    },
    




}










