var take=require('util');
module.exports={
  isPrimes(initial, final) {
    try {
      var flag = 0;
      k = 0;
      var prime = [];

      for (var index1 = initial; index1 <= final; index1++) {
        for (var index2 = 2; index2 < index1; index2++) {
          if (index1 % index2 == 0) {
            flag = 0;
            break;
          } else {
            flag = 1;
          }
        }
        if (flag == 1) {
          prime[k++] = index1;
        }
      }
      return prime;
    } catch (error) {
      console.log(error.message);
    }
},
  dArray() {
    try {
      var arr = [];
      var array = [
        ["0-100 "],
        ["100-200 "],
        ["200-300 "],
        ["300-400 "],
        ["400-500 "],
        ["500-600 "],
        ["600-700 "],
        ["700-800 "],
        ["800-900 "],
        ["900-1000 "]
      ];
      for (let i = 2; i < 1000; i++) {
        if (this.isPrime(i)) {
          arr.push(i);
        }
      }
        var range = 100,
        k = 0;
        for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (this.isAnagram(arr[i], arr[j])) {
            if (arr[i] <= range) {
              if (arr[j] <= range) {
                array[k].push(arr[i]);
                array[k].push(arr[j]);
              }
            } else {
              range = range + 100;
              k++;
              if (arr[j] <= range) {
                array[k].push(arr[i]);
                array[k].push(arr[j]);
              }
            }
          }
        }
      }
      console.log("The Number which are prime and anagram ");
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          take.print(array[i][j]);
          if (j == 0) {
            take.print(" : ");
          } else {
            if (j != array[i].length - 1) take.print(",");
          }
        }
        console.log();
      }
    } catch (error) {
      console.log(error.message);
    }
  },
// *********************************  check prime or not *******************************/
    isPrime(n){
    if(n==0||n==1){
        return false;
    }else{
        for(let i=2;i<n;i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
},

/********************************* Check anagram or not *******************************/ 
isAnagram(word1, word2) {
    try {
      var format = /[a-zA-Z0-9]/;
      var result;
      if (format.test(word1) && format.test(word2)) {
        if (word1.length !== word2.length) {
          result = false;
        }
        var sortWord1 = word1
          .toString()
          .split("")
          .sort()
          .join("");
        var sortWord2 = word2
          .toString()
          .split("")
          .sort()
          .join("");
        
        result = sortWord1 === sortWord2;
        if (result == true) {
          return true;
        } else {
          return false;
        }
      } else {
        console.log("Enter only letters or alphabets");
      }
    } catch (error) {
      console.log(error.message);
    }
  },


}
  