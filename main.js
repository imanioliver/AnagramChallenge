let string0 = "Happy ***^$%^ #$@#2234 eaters always heat their yappers you're."
let string1 = "Happy eaters always heat their yappers.";
let string2 = "arf the maid is back";
let string3 = "Happy eaters always heat their yappers, Happy eaters always heat their yappers.";
let string4 = "Surely. And they're completely right!";
let string5 = "dude dude dude boob bobo eudd";

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
//
// Run Tests for string restrictions
//   console.log("STRING0: ", prepareStr(string0));
//   console.log("STRING1: ", prepareStr(string1));
//   console.log("STRING2: ", prepareStr(string2));
//   console.log("STRING3: ", prepareStr(string3));
//   console.log("STRING4: ", prepareStr(string4));
//   console.log("STRING5: ", prepareStr(string5));

function anagramDoubles (arr){

  //instantiate array that will hold all possible word pairs in on array
  let placeholdArr = [];
  let results = document.getElementById('results');
  // results.innerHTML += `<h1><strong> Results for string: </strong>${arr} </h1>`


  for (var i = 0; i < arr.length; i++) {
    let finalAnswer= ""
    let firstWord = arr[i];

    for (var j = 0; j < arr.length; j++) {
      let secondWord = arr[j]

      //create a wordPair of two different words
      let wordPair
      if (firstWord !== secondWord){
        wordPair = firstWord + " " + secondWord;
      }

      else {
        // wordPair = ""
        continue
      }

      placeholdArr.push(wordPair)
      // console.log("this is the wordPair we are currently working with", wordPair);
      // console.log(placeholdArr);

      for (var k = 0; k < placeholdArr.length; k++) {
        let set2 = new Set();
        let wp1 = wordPair.split(" ").sort()[0];
        let wp2 = wordPair.split(" ").sort()[1];
        let ph1 = placeholdArr[i].split(" ").sort()[0];
        let ph2 = placeholdArr[i].split(" ").sort()[1];
        let array2 =[];
        array2.push(wp1, wp2, ph1, ph2)
        // set2.add(ph1)
        // console.log("Set2: ", set2);
        // console.log("wp1", wp1);
        // console.log("wp2", wp2);
        // console.log("wordPair", wordPair);
        // console.log("ph1", ph1);
        // console.log("ph2", ph2);
        // console.log("placeholdArr[i]", placeholdArr[i]);

        if (wordPair.toString() === placeholdArr[k].toString()){
          // if they are exactly the same word pair like "happy dog" and "happy dog"
          // console.log("placeholdArr[i] " + placeholdArr[i] + " is the same as wordPair " + wordPair);
        }
        else if(wordPair !== placeholdArr[k]){
          //if the pairs are not identical...

          if (wp1 !== ph1 && wp1 !== ph2 && wp2 !== ph1 && wp2 !== ph2 && wp1 !== "" && ph1 !== ""){
            // console.log("no word doubles");
            // console.log("wp1 " + wp1 + " wp2 " + wp2 + " ph1 " + ph1 + " ph2 "+ ph2);
            if (wordPair.split("").sort().join("") === placeholdArr[i].split("").sort().join("")){
              // console.log("we made it to 93");
              console.log("the anagrams are: " +  wordPair + " and " + placeholdArr[i]);
            //if statement that splits all characters in wordPair and placeholdArr[i] to see if they match, demonstrating that they are anagrams of eachother

            // console.log("HELLOOOO IS ANYONE THERE", wp1 === ph1 || wp1 === ph2 || wp2 === ph1 || wp2 === ph2 );

                  //and if words in each pair are different from the words in the other pair
                  // console.log("no duplicates");

                    // results.innerHTML += `<div> Anagrams:  ${wordPair} and ${placeholdArr[i]} </div> </br> </br>`
            // console.log(wordPair + " and "+ placeholdArr[i]);

            }
          }
          else{
            // console.log("there are repeated words in the pairs, which are:" + wordPair + " " + placeholdArr[i]);
          }

        }
        else if(wordPair !== placeholdArr[k] && wordPair.split("").sort().join("") !== placeholdArr[k].split("").sort().join("")) {
          // console.log("There are no double anagrams here!");
          // results.innerHTML += `<div>There are no double anagrams here!</div>`
        }
      }
    }
  }
  // console.log("this is the place holder array: ", placeholdArr);
  // console.log(placeholdArr);
}

anagramDoubles(prepareStr(string5));
