
//var numbers = [23, 15, 81, 74, 57, 88, 53, 49, 36, 61]
// console.log(numbers)



// Q Find the numbers who odd and event.
//  var numbers = [23, 15, 81, 74, 57, 88, 53, 49, 36, 61]

// function findSumAndEven(array) {


//     for (var i = 0; i < array.length; i++) {

//         if (array[i] % 2 == 0) {
//             console.log(`${array[i]} this number is even.`)
//         } else {
//             console.log(`${array[i]} this number is odd.`)
//         }
//     }
// }
// findSumAndEven(numbers)





// Q Find the count of numbers who odd and even.
// var numbers = [23, 15, 81, 74, 57, 88, 53, 49, 36, 61, 22, 77]


// function findSumAndEven(array) {

//     var oddCount = 0;
//     var evenCount = 0;

//     for (var i = 0; i < array.length; i++) {

//         if (array[i] % 2 == 0) {
//             evenCount++;
//         } else {
//             oddCount++;
//         }
//     }
//     console.log(oddCount, "-oddcount")
//     console.log(evenCount, "-evenCount")
// }
// findSumAndEven(numbers)










// Nested for loops


// for (var i = 0; i < Array.length; i++) {
//     for (var j = 0; j < Array.length; j++) {

//     }
// }


// Q. given an array and target,
//     find out two numbers whos addition is target.


// var array = [23, 3, 4, 8, 4, 2, 58, 9, 6, 4, 24, 6, 7, 65, 4, 5]
// var target = 82;

// for (var i = 0; i < array.length - 1; i++) {

//     for (var j = i + 1; j < array.length; j++) {

//         if (array[i] + array[j] == target) {
//             console.log(`${array[i]} + ${array[j]} = ${target}`)
//         }
//     }
// }