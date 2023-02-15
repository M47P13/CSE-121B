// Lesson 2
const myName = 'Maya Thompson';
document.querySelector('#name').textContent = myName;

const currentYear = 2023;
document.querySelector('#year').textContent = currentYear;

const myPicture = 'images/Portrait.jpeg';
document.querySelector('img').setAttribute('src', myPicture);


const favoriteFoods = ['Chicken Fettucini', ' Hibachi steak', ' Chow Mein Noodles', ' Pizza'];
document.querySelector('#food').textContent = favoriteFoods;A
const anotherFavoriteFood = 'Pizza';
favoriteFoods.push(anotherFavoriteFood);
document.querySelector('#food').textContent = favoriteFoods;
favoriteFoods.shift();
document.querySelector('#food').textContent = favoriteFoods;
favoriteFoods.pop();
document.querySelector('#food').textContent = favoriteFoods;


