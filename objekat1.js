//objekti

const myCar ={
    marka: "Audi",
    model: "a4",
    boja: "crvena",
    menjac: "automatski",
    km: 240000,
    kontakt: [12354333, 98667899],
    servis: {
        datum: "04.maj",
        km: 230000,
        serviser: "Geko",

    }
};

udaren: true;


console.log(myCar);
console.log("Moj auto je marke: ", myCar["marka"]);
console.log(myCar.servis.serviser);

//mycar.model === myCar['model']

const radnik = {
    first_name: "Bob",
    last_name: "Euroblok"
 godina: 30,
    fullName: function () {
        return this.firstName + "" + this.last_name;
    
    },
    adresa: {
        ulica:"Avnoja",
        broj: "bb",
        grad: "Novi Pazar",
        getAddress: function () {
            console.log(this); 
        },
    },
};
radnik.adresa.getAddress();
// function staJeOvdeThis () {
// console.log(this); }


//     age: 30,
//     job: 'Programer',
//     adresa: 'Avnoja BB',
//     city: 'Novi Pazar',
//     contact:  " 0643922838",
//      radni_sati:40,
//      satnica: 20,
// };
// console.log("Radnik Bob Euroblok, radi kao programer, ima 30 gofina zivi u Novi Pazar i prima platu  200");
// console.log("Radnik" + radnik.firstName + radnik.last_name + "radi kao" + radnik.job, radnik.age, "godina", "i prima platu" radnik.radni_sati * radnik.satnica);

console.log(radnik.fullName());

//this lada sae poziva na objelat je ceo taj objekat