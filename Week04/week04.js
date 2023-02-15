const car = {type: 'Fiat', model:'500', color:'white'};

console.log(car.type);

console person = {
    firstName: 'John'
    lastName: 'Deere'
    age: 60,
    eyeColor: 'Blue',
}

console.log(person);

const acourse ={
    code:'CSE121b',
    name: 'JavaScript Language',
    logo: 'Week04/javascript-logo-transparent-logo-javascript-images-3.jpg'
    sections:[
        {sectionNum: 1, roomNum: 'STC353', 
        enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        {sectionNum: 2, roomNum: 'STC347',
         enrolled: 35, days:'TTh', instructor: 'Sis A'}
    ], 
    showSelection:function(){
        console.log('showSection ran'):
    }, 
    enrollStudent: function(sectionNum){
        const sectionIndex = this.section.findIndex((item)=>
        item.sectionNum == sectionNum);
        if(sectionIndex >= 0){
            this.sections[sectionIndex].enrolled++;
            renderSections(this.section);
            console.log(this.item);
        }
    }
}

document.querySelector('#selection').innerHTMl = '<li>${aCourse.section[0].roomNum}</li>';

function add_room(item){
    document.querySelector('#section').innerHtml += '<li>${aCourse.section[0].roomNum}</li>';}

console.log(aCourse.sections[1].roomNum);

console.log(aCourse.name);

document.querySelector('#title').textContent = aCourse.name;

document.querySelector('img').setAttribute('src, aCourse .logo');

function renderSections(sections){
    const html = sections.map(
        (sections) => '<tr>
        <td>${section.sectionNUm}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>'
    );
    document.querySelector(#courses).innerHTML = html.join("");
}
document.querySelector('#enrolledStudent').addEventListener('click', function(){
    const
})