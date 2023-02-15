show ();

//Declaration -- Global
//This will be used a few times vs an Expression will be used once
function show(){
    console.log('This is output for the developers');
}
//function square (number){
//    return number* number;
//}


//Expression
//This will be used a once vs a Declaration which would be used multiple times
//const square = fnction(number){
//    return number * number
//}


//Arrow
//Shorter Syntax less typie so helps to save time

//let square = (number) =>{
//    return number * number;
//}

//An even shorter way but thats assuming we have a parameter.
//const square = (number) => number * number;

document.querySelector('#result').textContent = square (4);


//Array Methods
//.forEach method

const simple_array = ['a', 'b', 'c'];
 //forEach with Declaration function

 simple_array.forEach(show_array);

 function show_array(item) {
    console.log(item);
 }

 //forEach eith expression function
 simple_array.forEach(function(item)){
    console.log(item);
 }

 //forEach with arrow function

 simple_array.forEach(item => console.log(item));

//step
 const step = ["one", "two", "three"];

//call back function
 //example 1

 function makeList(item){
    const listElement = document.getElementById("myList");
    listElement.innerHTML += '~<li>${item}</li>';
    //listElement.innerHTML += '~<li>${item}</li>';
    //Can also do it like this ^ w/ ~
 }

 steps.forRach (makeList);

 //example 2
 //is the luckyNumber in the list?
 
 const myArray = [12, 34, 21, 54];

 const luckyNumber = 21;
 let luckyIndex = -1;

 myArray.forEach(function(item, index){
    if (item === luckyNumber){
        luckyIndex - index;
    }
 });

 console.log(luckyIndex);

  //map array method -- a new array is made from original array method
 //example 1 again
 const newsteps = ["one", "two", "three"];

 const stepHtml = steps.map(function (newsteps){
    return'<li>${step}</li>';
 });

docuent.getElementById("myList").innerHTML = steps.Html.join(' ');

console.log(newsteps);

const array1= [1, 4, 9, 16];

//.map means that youre making a new array with that item...
const map1 = array.map(item => item * 2);
//Could have also done it like this 
//const map1 = array.map(times two);
//  const map1= array1.map(timestwo);
//function timestwo(item) {
//    return item * 2
//}

console.log(map1);
console.log(array1);