/**
 * Created by siqi on 9/24/16.
 */

//Create a function such that, given argument arr, an array, it returns the same array in reverse order

function reverseArray(arr){
    //your code here
   


var arr2 = [];
for(i=0; i<arr.length; i++) {
	var element = arr[i];
	arr2.unshift(element);
  }
  return arr2;
}
console.log( reverseArray([1,2,3,4,5]) ); //should log [5,4,3,2,1]
