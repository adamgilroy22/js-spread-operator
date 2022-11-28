/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator - Changes made to second array also change in first
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4); // Add 4 to array 2
console.log("Second array: ", arr2);
console.log("First array: ", arr1); // 4 has also been pushed to array 1

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3]; // Makes a copy of array 3, allowing us to change array 4 without changing array 3

arr4.push(7) // Add 7 to array4
console.log("Third array: ", arr3); // Array 3 remains the same
console.log("Fourth array: ", arr4); // Array 4 has a 7 in it

// Copying an object
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1, d: 4}; // Copies first object to object 2 and adds d 4
let obj3 = { ...obj1, b: 5 }; // Copies first object but changes b from 2 to 5. First object remains the same.

console.log("First Object: ", obj1); // Remains the same after creation of second and third objects
console.log("Second Object: ", obj2); // Prints second object including d 4
console.log("Third Object: ", obj3); // Prints third object, same as first except b is 5 instead of 2

// Copying only part of an array/object
let arr5 = [...arr1, { ...obj1 }, ...arr3, "x", "y", "z"];
console.log(arr5); // Contains all elements of first and third arrays, a copy of the first object and x, y and z. Output: [ 1, 2, 3, 4, { a: 1, b: 2, c: 3 }, 4, 5, 6, "x", "y", "z" ]
