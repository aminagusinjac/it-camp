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



//const DATA1 = [1, 3, 4, 2, 7, 14];

//el > 2 = el * 7
//el > 2  && el < 8 = (el*4) / 2 

// const dogAgeToHuman = (ages) => {
//      const humanAge = age.map((age) => {
//          if (age > 2 && el < 8) {
//              return (el * 4 )
//          }
//      })


// };

// console.log(dogAgeToHuman(DATA1));


//MAP


// const DATA = [100, 65, 76, 80, 99, 53, 1, 2];

// const returnEven = (numbers) => {
//     const evenNumber = numbers. filter((num) => num % 2 === 0 && num <= 50);

// return evenNumbers;

//     console.log(returnEven(DATA));
//     //filter vraca niz, tj u ovom slucaju da nam vrati sve parne brojeve
// }

//zadatak 2

// const DATA = [5, 3, 2, 8, 7, 9];

// const returnPow = (numbers) => {
//    const pow = numbers.map((el) => el* el + 10);

//   //radi kvadrat pa dodaje 10
//     return pow;
// };

// console.log(returnPow(DATA));


//3 zadatak

// const DATA =  [100, 200, 250, 400, 520];

// const cartTotal = DATA.reduce (
// (previousValue, currentValue) => previousValue + currentValue);

// //sabira vrednosti 
// console.log(previousValue, currentValue) => previousValue +  currentValue,
// // 500
// //);

// const DATA = [26, 28, 16, 22, 30, 28]
// //saberemo zbir svih ovih godina , pa posle podelimo sa brojem clanova

// const sumAvgAge = (ages) =>  {
//    const sumAvAge = (ages) => {
//        ages.reduce((prevValue, CurValue) => prevValue + curValue) / ages.length)
//        ;
//        const average = sum / ages.length;

//        return sum;

//    }
// };



// console.log(sumAvgAge(DATA));

// // console.log (returnPow(DATA));


const cars = ["BMW", "Audi", "Smart"]


cars.push ("Mercedes") //dodaje na zadnje mesto
cars.unshift("pasat") //dodaje na prvo mesto


//ZADATAK 2KVADRAT SVAKOG CLANA PLUS 10 
const data = [5,3,2,8,7,9]
const Niz=DATA.map((el)=> el* el +10);
console.log(Niz)





