let string0 = "Happy ***^$%^ #$@#2234 eaters always heat their yappers you're."
let string1 = "Happy eaters always heat their yappers.";
let string2 = "arf the maid is back";
let string3 = "Happy eaters always heat their yappers, Happy eaters always heat their yappers.";
let string4 = "Surely. And they're completely right!";
let string5 = "abcd bcad bdad";


//creates a set to place string into
let set = new Set();

function prepareStr (str) {

  //regex that checks for alphanumeric characters, and sets all characters to lowercase
  let splitArr = [];
  str = str.replace(/[^a-z0-9+]+/gi, ' ');
  str = str.toLowerCase();

  //splits array by spaces made by regex
  splitArr = str.split(" ");

  //for loop through arr of strings to eliminate those less than 4 characters
  for (var i = 0; i < splitArr.length; i++) {
    if (splitArr[i].length > 3){
      //takes out any strings with fewer than four, and adds them to the set
      // arr.splice(i, 1)
      // arr.push(splitArr[i])
      set.add(splitArr[i]);
    }
  }
  //returns set of unique strings
  // return set;
  return Array.from(set);
}

console.log("STRING0: ", prepareStr(string0));
console.log("STRING1: ", prepareStr(string1)); //currently, I'm only running this in the console with assert
console.log("STRING2: ", prepareStr(string2));
console.log("STRING3: ", prepareStr(string3));
console.log("STRING4: ", prepareStr(string4));
