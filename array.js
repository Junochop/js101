console.log("in arrays");

var pokemon = "charmander"
var array = [42, "wow", null, "car", pokemon];

console.log(array [4]);

var newString = array.join('|');
console.log(newString);
console.log(typeof newString);

array = newString.split("|");
console.log(array);

var sentence = "http://www.meetup.com/"
console.log(sentence.split("/"));
console.log(sentence.split(""));

var newArray = ["dog","cat","hippo","moo"];
var numberArray = [3, 66, 77, 45, 8];

console.log(newArray.reverse());

console.log(newArray.sort());
console.log(numberArray.sort());

console.log(numberArray.sort(function(first, second){return first - second;}));

console.log(newArray);
var result = newArray.slice(1, 3);
console.log(result);


console.log(numberArray);
var results =numberArray.splice(3, 1);
console.log(results);


// for loops

newArray = ["dog","cat","pig","hippo"];

for (var i = 0; i < newArray.length; i++) {
	debugger;
	console.log("I'm at index" + i);
	console.log(array[i]);
}


















