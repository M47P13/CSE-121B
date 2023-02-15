// Lesson 3

//Adding
function add(number1, number2) 
{
    return number1 + number2;
}
function addNumbers() 
{
    let AddNum1 = parseInt(document.querySelector('#AddNum1').value);
    let AddNum2 = parseInt(document.querySelector('#AddNum2').value);
    let result = add(AddNum1, AddNum2);
    document.querySelector('#sum').value = result;
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


// Subtracting
const subtract = function (number1, number2) 
{
    return number1 - number2;
}
const subtractNumbers = function() 
{
    let SubNumOne = parseInt(document.querySelector('#SubNumOne').value);
    let SubNum = parseInt(document.querySelector('#SubNum').value);
    let result = subtract(SubNumOne, SubNum);
    document.querySelector('#difference').value = result;
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


//Multiplying
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => 
{
    let MultNumOne = parseInt(document.querySelector('#MultNumOne').value);
    let MultNumTwo = parseInt(document.querySelector('#MultNumTwo').value);
    let result = multiply(MultNumOne, MultNumTwo);
    document.querySelector('#product').value = result;
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


//Dividing
function divide(number1, number2) {
    return number1 / number2;
}
function divideNumbers() {
    let dividedNum = parseInt(document.querySelector('#dividedNum').value);
    let divisor = parseInt(document.querySelector('#divisor').value);
    let result = divide(dividedNum, divisor);
    document.querySelector('#quotient').value = result;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


//Section 2
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').textContent = currentYear;

//Section 3
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
document.querySelector('#array').textContent = numbers;
document.querySelector('#odds').textContent = numbers.filter(number => number % 2);
document.querySelector('#evens').textContent = numbers.filter(number => number % 2 === 0);
document.querySelector('#sumOfArray').textContent = numbers.reduce((sum, number) => sum + number, 0);
document.querySelector('#multiplied').textContent = numbers.map(number => number * 2);
document.querySelector('#sumOfMultiplied').textContent = numbers.map(number => number * 2).reduce((sum, number) => sum + number, 0);
