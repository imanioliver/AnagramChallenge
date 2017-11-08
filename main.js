let string0 = "Happy ***^$%^ #$@#2234 eaters always heat their yappers you're."
let string1 = "Happy eaters always heat their yappers.";
let string2 = "arf the maid is back";
let string3 = "Happy eaters always heat their yappers, Happy eaters always heat their yappers.";
let string4 = "Surely. And they're completely right!";
let string5 = "abcd bcaj bdad bacd jabc";

function prepareStr(str){
    let set = new Set();
    let splitArr = [];
    //regex that checks for alphanumeric characters, and sets all characters to lowercase
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
    return Array.from(set);
}

//tests
  console.log("STRING0: ", prepareStr(string0));
  console.log("STRING1: ", prepareStr(string1));
  console.log("STRING2: ", prepareStr(string2));
  console.log("STRING3: ", prepareStr(string3));
  console.log("STRING4: ", prepareStr(string4));
  console.log("STRING5: ", prepareStr(string5));



//instantiate array that will hold all possible word pairs in on array

function anagramDoubles (arr){
  let placeholdArr = [];
  let results = document.getElementById('results');


  for (var i = 0; i < arr.length; i++) {
    let firstWord = arr[i];

    for (var j = 0; j < arr.length; j++) {
      let secondWord = arr[j]
      let wordPair = firstWord + " " + secondWord
      placeholdArr.push(wordPair)
      console.log("this is the wordPair we are currently working with", wordPair);
      // console.log(placeholdArr);

      for (var k = 0; k < placeholdArr.length; k++) {
        if (wordPair === placeholdArr[k]){
          // console.log("placeholdArr[i] " + placeholdArr[i] + " is the same as wordPair " + wordPair);
        }
        else if(wordPair !== placeholdArr[k]){
          // console.log("placeholdArr[i] " + placeholdArr[i] + " is not the same as the same as wordPair " + wordPair);

          if (wordPair.split("").sort().join("") === placeholdArr[i].split("").sort().join("")){

            results.innerHTML += `<div> Anagrams:  ${wordPair} and ${placeholdArr[i]} </div> </br> </br>`

            // console.log(wordPair + " and "+ placeholdArr[i]);

          }


        }
        else if(wordPair !== placeholdArr[k] && wordPair.split("").sort().join("") !== placeholdArr[k].split("").sort().join("")) {
          console.log("There are no double anagrams here!");
        }
      }
    }
  }
  // console.log("this is the place holder array: ", placeholdArr);
}

// anagramDoubles(prepareStr(string5))


anagramDoubles(prepareStr(string3));
