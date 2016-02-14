var myObject = {
  superPower: "som text",
  anotherProperty: "something",

};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    if (a>b) {
      console.log (a>b);
      return a;
    }
    else {
      console.log (b);
      return b;
    }
  }

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */
 if (a>b) {
   console.log (a>b);
   return a;
 }
 else {
   console.log (b);
   return b;

   function maxOfThree(a, b, c) {
     if (a > b) {
       console.log(a > b);
       if (a > c) {
         console.log(a);
         return (a);
       } else {
         console.log(c);
         return (c);
       }
     } else {
       console.log(b > a);
       if (b > c) {
         console.log(b);
         return (b);
       } else {
         console.log(c);
         return (c);
       }
     }
   }
console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

 function isVowel(char) {
   var newChar= char.toString().toLowerCase();
   if (newChar === "a" || newChar ==="e" || newChar ==="i" || newChar ==="o" || newChar === "u") {
     return (true);
   } else {
     return (false);
   }
 }

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

 function rovarspraket(text) {
   var emptyString="";
   if(typeof(text) !== "string"){
     return text.emptyString();
   }
   for(var i=0; i<text.length; i++){
  if (text[i].toLowerCase() === "a" || text[i].toLowerCase() === "e" || text[i].toLowerCase() === "i" || text[i].toLowerCase() === "o" || text[i].toLowerCase() === "u"){
    emptyString += text[i];
  }else{
    emptyString += text[i].concat("o").concat(text[i]);
  }
}
  return emptyString;
  }





console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */


function reverse(str){
  console.log(str.split("").reverse().join(""));
  return str.split("").reverse().join("");
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    console.log(sentence.split(" ");


}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
