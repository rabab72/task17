let multiDimArray = [];

let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));


console.log("Multiplication table of " + tableNumber + " up to " + tableLength + ":");

for (let i = 1; i <= tableLength; i++) {
    let result = tableNumber * i;
    console.log(tableNumber + " * " + i + " = " + result);
}

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];


console.log("Items of the array:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

document.write("<h3>Counting: </h3>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}


document.write("<h3>Reverse counting: </h3>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

document.write("<h3>Even: </h3>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}


document.write("<h3>Odd: </h3>");
for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}


document.write("<h3>Series: </h3>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}

let A = ["cake", "apple pie", "cookie", "chips", "patties"];


function searchItem(item) {

    item = item.toLowerCase();


    let found = false;


    for (let i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === item) {
            found = true;
            break;
        }
    }


    if (found) {
        alert("Yes, the item '" + item + "' is found in the list.");
    } else {
        alert("No, the item '" + item + "' is not found in the list.");
    }
}


let userInput = prompt("Enter the item you want to search:");
searchItem(userInput);

let A = [24, 53, 78, 91, 12];


function findLargestNumber(arr) {

    let largest = arr[0];


    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i];
        }
    }


    return largest;
}


let largestNumber = findLargestNumber(A);


console.log("The largest number in the array is: " + largestNumber);
let password = prompt("Enter your password:");

if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
} else {
    alert("Password cannot be empty");
}
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}
if (a === 1 && c === "Max") {
    alert("OK");
}

let num1 = 10;
let num2 = 10;


if (num1 === num2) {
    if (num1 <= num2) {
        alert("Both conditions passed.");
    }
}
let emptyArray = [];
let stringArray = ["Hello"];
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);
var alphabet = ["j", "i", "j", "k", "l", "m", "n", "o"];
var length = alphabet.length;
alert("Total length of the array: " + length);

let array = ["firstElement"];


array.push("secondElement");


alert(array[array.length - 1]);
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
console.log(Alphabet);

var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(42);
console.log(Alphabet);
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
console.log(sizes);

let array = ("firstElement");
array.unshift("secondElement");
alert(array[0]);

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes);

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);
console.log(regSizes);

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "hamster", "parrot");
console.log(pets);

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
console.log(pets);

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);
console.log(reducedPets);

for (let i = 0; i < 10; i++) {

    console.log("Iteration " + (i + 1));
}
for (let i = 0; i <= 11; i++) {
    for (let i = 0; i <= 4; i++)
        for (let count = 0; count < 100; count++) {
            for (let i = 3; i > 0; i--) {
                let numberOfElements = array.length;
                let flag = true;
                for (let i = 0; i < pets.length; i++) {

                    for (let i = 1; i <= 10; i++) {
                        if (i === 2) {
                            alert("Counter on the second iteration: " + i);
                            break;
                        }
                    }

                    let userNames = ["Alice", "Bob", "Charlie", "David"];

                    let firstName = prompt("Enter first name");

                    for (let i = 0; i < userNames.length; i++) {
                        if (userNames[i] === firstName) {
                            alert("Enter");
                            break;
                        } else if (i === userNames.length - 1) {
                            alert("Please write correct user name");
                        }
                    }
                    var matchFound = false;
                    for (var i = 0; i < list.length; i++) {
                        if (userInput === list[i]) {
                            alert("Match");
                            matchFound = true;
                            break;
                        }
                    }

                    if (!matchFound) {
                        alert("No match found");
                    }
                    var firstArr = ["a", "b", "c", "d", "e", "f"];
                    var secondArr = [1, 2, 3, 4, 5, 6];

                    for (let i = 0; i < firstArr.length; i++) {
                        for (let j = 0; j < secondArr.length; j++) {
                            console.log(firstArr[i] + secondArr[j]);
                        }
                    }
                    let password = "example";
                    if (password !== "") {
                        if (password.length <= 5) {
                            alert("Password must be greater than 5");
                        } else {
                            alert("OK");
                        }
                    }
                    if (a === 1) {
                        if (c === "Max") {
                            alert("OK");
                        }
                    }
                    if (a === 1 && c === "M") {
                        alert("OK");
                    }
                    let num1 = 10;
                    let num2 = 10;

                    if (num1 === num2) {
                        if (num1 <= num2) {
                            alert("Both conditions are true: num1 equals num2 and is less than or equal to num2.");
                        }
                    }
                    let emptyArray = [];
                    let arrayWithString = ["Hello"];
                    var alphabet = ["h", "i", "j", "k"];
                    var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
                    console.log(alphabet.length);

                    let myArray = ["apple"];


                    myArray[1] = "banana";


                    alert(myArray[1]);

                    let myArray = ["apple"];


                    myArray.push("banana");


                    alert(myArray[myArray.length - 1]);
                    let Alphabet = ["h", "i", "j", "k"];


                    Alphabet.pop();
                    let Alphabet = ["h", "i", "j", "k"];

                    Alphabet.push(5);