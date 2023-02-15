//Map Activity
let new_array = arr.map(function callback(currentValue(currentValue[,index[, arrray]]){
}[, thisArg])
//Declare an array with value = ['one','two','three']
//Convert our array of strings into an array of HTML strings. 
//  Each String should be turned into a list item. 
//Set out list of HTML strings into the myList list. 
const myList = ['one', 'two', 'three']
const MyList = myList.map(function(myList){
    return'<li>${myList}</li>';
});
document.getElemetnById("myList").innerHTML = myList.join();


//Activity 2 -Map
// Declare an array with letter grades in it: ['A", 'B', 'A'];
//Write a function that will take one letter grade, and return
//   the appropriate gpa points for the grade. i.e. if we send 
//   a 'A' it would return a 4 for 4.0 or 4.0
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);


//Activity 3 -Reduce
//Using the function from the previous activity, conver at array
//   of grades into an array of gpaPoints
//Using reduce calculate the GPA from the array of gpaPoints.
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


//Activity 4- filter
//Declare an array with the follwoing value: ['watermelon', 'peach',
//   'apple', 'tomato', 'grape']
//Using filter keep only the fruits that are no longer than 6 characters

const words = ['watermelon', 'peach','apple', 'tomato', 'grape'];

//const shortWords = words.filter (function(word){
//    return words.length < 6;
//    });

//Activity 5 -indexOf
//Declare an array with the following value: [12, 34, 21, 54]
//Declare a luckNumber variable with the value of 21;
//Use indexOf to see if the luckyNumber is in the Array.

// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);

//Events
const buttonElement = document.getElementById('submitButton');

function copyInput() {
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
}

buttonElement.addEventListener('click', copyInput);
//buttonElement.addEventListener('mouseover', copyInput);

let btn = document.querySelector('#add');
let output = document.querySelector('#sum');

function addNum(){
    //.value is really important to establish that it's a number
    let number1 = document.querySelector('#add1').value;
    let number2 = document.querySelector('#add2').value;

    output.value = Number(number1) + Number(number2);
}

btn.addEventListener('click',addNum)

//in the homework were going to be going over positive and negative numbers

const numbers = [1, 2, 3, 4,];

function getEvens(item){
    return (item % 2 === 0);
}

let evens = numbers.filter(getEvens)

console.log(evens);