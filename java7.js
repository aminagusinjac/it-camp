const godine = [12, 76, 26, 6, 233, 21, 29, 16]

function returnAdults (ages) {}

console.log(returnAdults(godine))


function returnAdults (ages) {
    const adults = [];
    for (const age of ages ) {
        if (age >= 18) {
adults .push(age);
        }
    }
    return adults;
}

console.log(returnAdults(godine));

//DODAVANJE NA KRAJ  NIZA - PUSH

cars.push("Mercedes");

cars.push("Mini","Fiat"); //mice iz niza

//DODAVANJE NA POCETAK NIZA
cars.unshift("Ford", "Kadilak", 4, "nesto");

//BRISANJE PRVOG CLANA NIZA - UNSHIFT

const shiftValue = cars.shift();


//OBRNI NIZ - revrse()

cars.reverse();

console.log (cars);


//SPAJANJE DVA NIZA - concat(niz);

const imena = ["faris",  "isko", "aldinn"];

const.age = [20, 100, 50, 120, 200, 76];

const spojeniNiz = imena.concat(age);
console.log(spojeniNiz);

//TRAZENJE CLANA NIZA  - FIND();  //vraca prvi clan

const trazenaVrednost = ages.find((el)  => el > 50 && el < 100);   //kao for petlja za niz 
console.log(trazenaVrednost);

//TRAZENJE INDEXA - findIndex ((el) => el < 100); 

const trazeniIndex = ages.findIndex((el) => el > 100);

console.log(trazeniIndex); //vrati prvi ndeix prvog clana koji prodje uslov

















