//dva niza i sadryi vrednosti iy oba niza koji ce da ih sadrzi 
//napraviti jos jedan pomocni niz koji ce da sadrzi sve parne
//u tom nizu parnih brojeva nametnuti prva dva broja 10 i 20
//vratiti dva pomocna niza
//


const DATA1 = [2, 20, 38, 75, 11, 29];
const DATA2 =  ["a", "b", "c", "d", "e"];

const mutateArrays = (array1, array2) => {   


    const helper = array1.concat(array2)
    const parni = [];

    for (const el of helper) {
        if (el % 2 === 0) {
            parni.push(el)
        }
    }
    parni.unshift(10, 20);
    //treci deo
    return [helper, parni]
};

console.log(mutateArrays(DATA1, DATA2));


//FILTER METODA

const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];
const numbers = [2, 8, 9, 11, 26, 85, 86, 90, 102, 1003, 1120];

const booleans =  [true, false, true, false]
const filteredArray = words.filter((el) => el.length < 8);



//.concat(numbers)
//.concat(booleans)
//.filter((el) => typeof el === "boolean");

console.log(filteredArray);


//MAP METODA

//const numbers = [2, 5, 10, 3, 4, 8];

//const squareNumbers = numbers.map((el) => Math.sqrt(el));

//console.log(squareNumbers);



// const numbers = [2, 5, 3, 1, 10, 8, 7];

// const squareNumbers = numbers.map( (el, index, array) => {
//   if(index ===0 || index === 3 || index === 5) {
//       return el * el;

//   } else {
//       return el;
//   }

// });

// console.log(squareNumbers);



const DATA1 = [1, 3, 4, 2, 7, 14];

//el > 2 = el * 7
//el > 2  && el < 8 = (el*4) / 2 

const dogAgeToHuman = (ages) => {
     const humanAge = age.map((age) => {
         if (age > 2 && el < 8) {
             return (el * 4 )
         }
     })


};

console.log(dogAgeToHuman(DATA1));

























