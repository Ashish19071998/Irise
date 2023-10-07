var number  = 22;

if(number % 2 == 0){
    console.log("Number is Even")
}else{
    console.log("Number is Odd")
}


var number = 50;

if(number % 2 == 0){
    console.log(`The ${number} is Even`)
}else{
    console.log(`The ${number} is Odd`)
}

// Question:-
// Given an a number find out is number1 even or odd ,
// if number is even then chheck number2 is even or odd
// and if number is odd then check number3 is even or odd

// var number1  = 23;
// var number2  = 78;
// var number3 = 67;


var number1 = 23;
var number2 = 78;
var number3 = 67;

if (number1 % 2 == 0) {
    console.log(`The ${number1} is even number`)

    if (number2 % 2 == 0) {
        console.log(`The ${number2} is even number`)
    } else {
        console.log(`The ${number2} is odd number`)
    }
}
else {
    console.log(`The ${number1} is odd number`)

    if (number3 % 2 == 0) {
        console.log(`The ${number3} is even number`)
    } else {
        console.log(`The ${number3} is odd number`)
    }
}

