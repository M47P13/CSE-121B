//---------------------------------------------------------------------//
//  Adding, Multiplying, Dividing and Subtracting
//Stretch will need to add more css to make it look pretty
//
//---------------------------------------------------------------------//
function add(Num_Input_One, Num_Input_Two) {
    return Num_Input_One + Num_Input_Two;
}

//With classes practice
//class AddingNumbers {
//    constructor(AddOne, AddTwo){
//        this.AddOne =AddOne
//    }
//}

function addNumbers() {
    let AddOne = parseInt(document.querySelector('#AddOne').value);
    let AddTwo = parseInt(document.querySelector('#AddTwo').value);
    let result = AddOne + AddTwo;

    document.querySelector('#sum').value = result;
}


document.querySelector('#addNumbers').addEventListener('click', addNumbers);

const subtract = function (Num_Input_One, Num_Input_Two) {
    return Num_Input_One - Num_Input_Two;
}

const subtractNumbers = function() {
    let MinusOne = parseInt(document.querySelector('#MinusOne').value);
    let SubtractTwo = parseInt(document.querySelector('#SubtractTwo').value);
    let result = MinusOne - SubtractTwo;
    document.querySelector('#difference').value = result;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

const multiply = (Num_Input_One, Num_Input_Two) => Num_Input_One * Num_Input_Two;

const multiplyNumbers = () => {
    let MultiplyOne = parseInt(document.querySelector('#MultiplyOne').value);
    let MultiplyTwo = parseInt(document.querySelector('#MultiplyTwo').value);
    let result = MultiplyOne * MultiplyTwo;
    document.querySelector('#product').value = result;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


function divide(Num_Input_One, Num_Input_Two) {
    return Num_Input_One / Num_Input_Two;
}

function divideNumbers() {
    let dividend = parseInt(document.querySelector('#dividend').value);
    let divisor = parseInt(document.querySelector('#divisor').value);
    let result = dividend / divisor;
    document.querySelector('#quotient').value = result;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* BUILT-IN METHODS */


const currentDate = new Date();

let currentYear;


currentYear = currentDate.getFullYear();

document.querySelector('#year').textContent = currentYear;


/* ARRAY METHODS */


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

document.querySelector('#array').textContent = numbers;

document.querySelector('#odds').textContent = numbers.filter(number => number % 2);

document.querySelector('#evens').textContent = numbers.filter(number => number % 2 === 0);

document.querySelector('#sumOfArray').textContent = numbers.reduce((sum, number) => sum + number, 0);

document.querySelector('#multiplied').textContent = numbers.map(number => number * 2);

document.querySelector('#sumOfMultiplied').textContent = numbers.map(number => number * 2).reduce((sum, number) => sum + number, 0);



//Works Cited
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes