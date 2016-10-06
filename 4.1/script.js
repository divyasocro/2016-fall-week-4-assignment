/**
 * Created by siqi on 9/24/16.
 */

//Given this empty array, perform the following tasks
var arr1 = [];


//Task 1: populate the empty array with 10 random, *rounded*, numbers between 0 and 100
//Hint: within a 'for' loop, use 'Math.random() * 100' and 'Math.round()'

number = 10;

for(i=0; i<number; i++) {
	arr1.push(Math.round(Math.random()*100))
}

console.log(arr1);


//Task 2: remove the first element in the array and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

var remove = arr1.shift();
console.log('arr1 after:' + arr1);

//Task 3: remove the last element in the array, and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

var removelast = arr1.pop();
console.log(arr1);

//Question: how many elements does arr1 have at this moment?
//answer : 8


//Task 4: given a new empty array arr2, populate it with the exact same values as in arr1
//...but in reverse order
//Hint: use the '.unshift()' method of array. Can you look up the API for it?
var arr2 = [];
for(i=0; i<arr1.length; i++) {
	var element = arr1[i]
	arr2.unshift(element);
}

console.log(arr2);

//Task 5 OPTIONAL: filter out all the odd values in arr1, keeping the even values
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var arr3 = arr1.filter(function(el){
    //your code here
    return !(el%2);
});
console.log(arr3);