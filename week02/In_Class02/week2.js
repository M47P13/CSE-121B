
//SWITCH
    //switch which is an alternative to if-else statements 
    //Need to be cautious while using a switch because its easy to get logic errors with 
    //Little understanding of the overall topic.
let grade = "A";
let gpaPoints = 0;
switch (grade) {
  case "A":
    gpaPoints = 4;
    break;
  case "B":
    gpaPoints = 3;
    break;
  default:
    gpaPoints = -1;
}
//with a switch you will need to understand a break
    // a switch will continue to go through the rest of the code until it sees a break
if (randomNum > .5){
    console.log(Math.random());
    switch (coin){
        case "heads":
            console.log('heads');
            break;
        case "tails":
            console.log('tails');
            break;
    }

    
    let randomNum = Math.random();
        console.log
}
// DOM (meaning: Document meaning html elements accessed through JS)
document.querySelector('h1').textContent = "new output"
document.getElementById('p2').textContent = "alternative output: my second paragraph"
document.querySelector('ul').innerHTML = '<li> List Item </li>'
document.querySelector ('h1').textContent = "new output";

document.getElementById('p2').textcontent = "My 2nd paragraph";
document.querySelector('ul').innerHTML = " "

let date = new Date ();
console.log(date);

let year = date,getFullYear, (year);
console.log(year);

document.querySelector('#main_title').textContent = year;

function show()
{
    console.log('This function ran');
};
show(); //This is where we are calling function above

function addIt(n1,n2){
    return (n1+n2);
}
let sum = addIt(num1, num2);

document.querySelector('h1').textContent =addIt(num1, num2);

console.log(sum);

// old school 1.create 2.add content 3. add to the page

let newHeading = document.createElement('h2')
newHeading.textContent = "This is my new JS paragraph";
document.body.appendChild(newHeading);
//appendChild will add a node to the ending of the list of children of specific parent node.

//or

//add with inner HTML
let para = document.querySelector('div');
body.innerHTML = '<h2>This is my 2nd new JS paragraph</h2>'

let img ='dog.jpg';

document.querySelector('img').setAttribute('src', img);
//document.querySelector('img').setAttribute('src', 'photo of dog');
//document.querySelector('img').src = img;

//Arrays
//Push, splice, pop
let classes = ['CSE121b', 'CIT111', 'WDD130']

console.log(classes[2]);

console.log(classes)

classes.push('CIT222');

console.log(classes);

classes.shift();

console.log(classes);

classes.splice(2,2);

console.log(classes);

classes.pop();

console.log(classes);

document.querySelector('div').textContent = classes.join('-');