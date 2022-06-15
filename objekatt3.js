//ZADACI niz objekata

const students = [
    {name: "Faris", grade: 8, year: 2},
    {name: "ISko", grade: 8, year: 4},
    {name: "Aldin", grade: 8, year: 2},
    {name: "Amina", grade: 8, year: 2},
    {name: "Sabina", grade: 8, year: 3},
    {name: "Denis", grade: 8, year: 4},
    {name: "Senad", grade: 8, year: 1},
    
]
//prvi deo zadatka
function getAvgGrade(array) {
    const grades = array.map(el => el.grade)

console.log(grades)
//return grades

const   zbirOcena = grades.reduce((prev,curr)=> prev + curr)
console.log(zbirOcena)

//return zbirOcena
const prosek=zbirOcena/grades.length
console.log(prosek)
//return prosek

const zaokruzeno= +prosek.toFixed(2) //od broja pravimo string pa ga vracamo u broj
console.log(zaokruzeno)
return zaokruzeno
}
getAvgGrade(students); 

//FUNCTION CALL i apply se kaci na funkciju

const person = {
    name: "John Doe", 
    age: 22, 

};

const car={
    name: "Audi",
};
function sayHello () {
    console.log('Hello $ {this.name}');
}

sayHello.call(car);


let hrana = {food: "Pizza"};

function favFood(text, rating) {
    return `${this.food} ${text} ${rating}`;

}

console.log(favFood.call(hrana, "je  ukusna", 9));

console.log(favFood.apply(hrana, ["nije ukusna", 6]));


//BIND FUNKCIJA vraca funkciju kojoj menjamo ponasanje za this,
const bindFunc =favFood.bind(hrana);

console.log(bindFunc("nije nesto", 9));

//15.jun 2022 sreda


const persoon = {
    name: "John Due",
    age:48,
    job: "Employed",
    adress: "USA",
    kids: 4,
}

//persoon.phone="53498254830";

//console.log(person);

//console.log(Object.keys(persoon)) //nizovi kljuceva

//console.log(Object.values(persoon) )//nizovi vrednost 

Object.freeze(persoon);  //da smrzne objekat  ne moze nisya
Object.seal(persoon); //mogu da se promene postojce key vrednosti, ne mogu da se dodaju novi nema ulaska i izlaska



//persoon.name = "Drugi neko";

// const persoon2 = {
//     name: "John Due",
//     age: "Employed",
//     age:48,
    
//     adress: "USA",
//     kids: 4,
// }

const persoon2 = persoon;
persoon2.name = " Isko";
console.log(persoon)

console.log(Object.is(persoon,persoon2)); //person 2 je pokazivac na person 1
//person 2 je nova varijabla koja polazuje na  person  1
 


//NAPREDNA TEHNIKA JAVA SCRPIPA DA RADI SA OPERATORIMA

const names = ["faris ", " senad", "aldin", "dzenan", "sabina"]; 

const newNames = [...names];
console.log(names);
console.log(newNames);

// const numbers = [1, 2, 3, 1, 5, 2, 7, 10];

//tip podataka SET DEFINISE SE SA ...
//set NE PRIMA DUPLIKAT , ne vaze f-je kao za nizove

// const numbers = [1, 2, 3, 1, 5, 2, 7, 10];
const nemaDuplih = [...new Set(numbers)];

console.log(nemaDuplih);



// const kvadrati = nemaDuplih.map((el) => el*el)
// const numbers = [1, 2, 3, 1, 5, 2, 7, 10];

// const names =  ["Johna", "cenaa", "undertakaer"];

  //spred operator radi izmedju kockastih i vicitastih znakova
const  name = {
    name: "John",
    state: "USA",
};

const extendedPerson ={
    ...person,
    phone:"565478",
    address: "NY 76"


}

console.log(person)
console.log(extendedPerson)

const Movies= [
{titile:"Movie1", rating:9, budget: "230 M"},
{titile:"Movie2", rating:5, budget: "230 M"},
{titile:"Movie3", rating:9, budget: "300 M"},
{titile:"Movie4", rating:6, budget: "230 M"},
{titile:"Movie5", rating:5, budget: "2120 M"},
]

const newMoviesArray= movies.map((movie)=> return{
    titile: Movies.title,
    spended: Movies.budget,
};
});

console.log(newMoviesArray);


