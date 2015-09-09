// CALLBACKS PROBLEM SET
// Unit 3 / Lesson 2 / Project 2

console.log("Exercises 1 & 2:  Practice with writing basic callbacks.");

function addPunc(a){
	return a += "!*!*! ";
}

function addPraise(a){
	return a += " " + "is the greatest" + ". ";
}


var myArray = ["Dog", "Cat", "Bird", "Horse"];
function modifyArray(myArray, callback ){
	var newString = "";
	for (var i = 0; i < myArray.length; i++){
		newString += callback(myArray[i]);
	}
	return newString;
}

console.log(modifyArray(myArray, addPunc));
console.log( modifyArray(myArray, addPraise) );

function newPraise(a, praise){
	return a += praise;
}

var praise = ", You are a silly monkey!  "
function moreParams(myArray, praise, callback){
	if (typeof callback === "function"){
		var newString = "";
		for (var i = 0; i < myArray.length; i++){
			newString += callback(myArray[i], praise);
		}
		return newString;
	} else{
		return myArray;
	}
}

console.log(moreParams(myArray, praise, newPraise));

console.log("\n");
console.log("Exercise 3:  Practice with writing the map function is below.");
function map(array, callback){
	var mapped= [];
	for (var i = 0; i < array.length; i++){
		mapped.push( callback(array[i]) );
	}
	return mapped;
}

map([1, 2, 3], function(value) { // returns [2,3,4]
    return console.log(value += 1);
});

//___________________________________________________Example invocation 2
map([1, 2, 3], function(value) { // returns [2,4,6]
    return console.log(value *= 2)  ;
});








