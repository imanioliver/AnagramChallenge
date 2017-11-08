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

function generateAnagram(input, outputFunction) {
  var length = input.length;

  // if there are only two characters, print both combinations
  if (length == 2) {
    outputFunction(input);
    outputFunction(input[1] + input[0]);
  }
  else if (length > 2) {
    // iterate through each character in the string
    // remove the first character
    // print first character along with all combinations of the remaining characters
    // this function is called recursively to print all available combinations
    for (var n = 0; n < input.length; n++) {
      var firstchar = input[0];
      var rotatedString = input.substring(1);

      generateAnagram(rotatedString, function (res) {
        outputFunction(firstchar + res);
      });

      // rotate
      input = rotatedString + firstchar;
    }
  }
}


function anagramDoubles (arr){
  let placeholdArr = [];
  let map = [];


  for (var i = 0; i < arr.length; i++) {
    let firstWord = arr[i];

    for (var j = 0; j < arr.length; j++) {
      let secondWord = arr[j]
      let wordPair = firstWord + " " + secondWord
      placeholdArr.push(wordPair)
      // console.log("this is the wordPair we are currently working with", wordPair);
      // console.log(placeholdArr);

      for (var i = 0; i < placeholdArr.length; i++) {
        if (wordPair === placeholdArr[i]){
          // console.log("placeholdArr[i] " + placeholdArr[i] + " is the same as wordPair " + wordPair);
        }

        else if(wordPair !== placeholdArr[i]){
          // console.log("placeholdArr[i] " + placeholdArr[i] + " is not the same as the same as wordPair " + wordPair);
          generateAnagram(placeholdArr[i], function (output) {

            if (!map[output]) {
              map[output] = output;
              // console.log(output);
            }
          })


          //cool that works
          // now I want to generate all the anagrams for dummy[i] as I go. but I'll call the function (generateAnagram(dummy[i])) like in an if statement within this 1
          // if they match, then print wordPair +  "and" + "placeholdArr[i]" and they'll already have the space in there!!
          //now let's figure out how to generate the anagram with the generate function

          // generateAnagram(placeholdArr[i], function (output) {
          //
          //   if (!map[output]) {
          //     map[output] = output;
          //     // return output;
          //     console.log(output);
          //   }
          // }).includes(wordPair);

        }
      }
    }
  }
}



// anagramDoubles(prepareStr(string5));
// console.log(generateAnagram(prepareStr(string5)))

console.log("STRING0: ", prepareStr(string0));
console.log("STRING1: ", prepareStr(string1));
console.log("STRING2: ", prepareStr(string2));
console.log("STRING3: ", prepareStr(string3));
console.log("STRING4: ", prepareStr(string4));
