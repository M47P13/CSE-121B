// Lesson 5

// Section 1
const today = new Date();
let dayOfWeek;
dayOfWeek = today.getDay();

let message1;
if (dayOfWeek >= 1 && dayOfWeek <= 5) 
{
  message1 = "Hang in there!";
}

if (dayOfWeek >= 1 && dayOfWeek <= 5) 
{
  message1 = "Hang in there!";
} else {
  message1 = "Woohoo!  It is the weekend!";
}
document.querySelector("#message1").textContent = message1;

// Section 2
let message2;

switch (dayOfWeek) 
{
  case 0:
    message2 = "Monday";
    break;
  case 1:
    message2 = "Tuesday";
    break;
  case 2:
    message2 = "Wednesday";
    break;
  case 3:
    message2 = "Thursday";
    break;
  case 4:
    message2 = "Friday";
    break;
  case 5:
    message2 = "Saturday";
    break;
  case 6:
    message2 = "Sunday";
    break;
}
document.querySelector("#message2").textContent = message2;

//Big Sad 