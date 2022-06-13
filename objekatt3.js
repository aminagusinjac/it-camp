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

