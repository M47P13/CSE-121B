/* Lesson 2 */

/* VARIABLES */

const Name = 'Maya Thompson'
document.querySelector('#name').textContent = Name;

const currentYear = 2022;
document.querySelector('#year').textContent = currentYear;


const ProfilePic = 'Javascript Language/week02/images/Maya015.JPG';
document.querySelector('#img').setAttribute('src', ProfilePic);

/* ARRAYS */

const food = ['French Onion Soup', 'Steak', ' and', 'Hibachi'];
document.querySelector('#food').textContent = foods;

const AnotherFood = 'Chicken Alfredo';
foods.push(AnotherFood);
document.querySelector('#food').textContent = AnotherFood;