// Lesson 4

let myInfo = 
{
    name: 'Maya Thompson',
    photo: 'images/Portrait.jpeg',
    FavortiresFoods: [
        'Chicken Fettucini', ' Hibachi steak', ' Chow Mein Noodles', ' Pizza'],
    hobbies: [
        'Drawing',
        'Reading',
        'Video Games'
    ]
};

myInfo.previousHomes = [
    {
        place: 'Star, ID',
        length: '12 years'
    },
    {
        place: 'Meridian, ID',
        length: '7 years'
    },
    {
        place: 'Rexburg, ID',
        length: '2 years'
    }
]


const myPicture = 'images/Portrait.jpeg';
document.querySelector('img').setAttribute('src', myPicture);

myInfo.FavortiresFoods.forEach((food) =>
 {
    let favoriteFoodElem = document.createElement('li');
    favoriteFoodElem.textContent = food;
    document.querySelector('#favorite-foods').appendChild(favoriteFoodElem);
});

myInfo.hobbies.forEach((hobby) => 
{
    let hobbyElem = document.createElement('li');
    hobbyElem.textContent = hobby;
    document.querySelector('#hobbies').appendChild(hobbyElem);
});

myInfo.previousHomes.forEach((placeLived) => 
{
    let previousHomesPlace = document.createElement('dt');
    previousHomesPlace.textContent = placeLived.place;
    
    let previousHomesLength = document.createElement('dd');
    previousHomesLength.textContent = placeLived.length;
    
    document.querySelector('#places-lived').appendChild(previousHomesPlace);
    document.querySelector('#places-lived').appendChild(previousHomesLength);
})

