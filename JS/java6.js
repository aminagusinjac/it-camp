
//vezba
// const cars = ["BMW", "Audi", "MB", "VW", "Fiat"];

// for (let i = 0; i < cars.length; i++) {
    
//     cars[1]="PORSE";
//     console.log(cars[i]);
// }


// const isSunny=true;
// !isSunny ? console.log("Danas je suncano"): console.log("Danas nije suncano");


// let godine= 17;
// if(godine>=18)
// daLiJePunoletan= true;
// else{
//     daLiJePunoletan=false;
// }
// console.log("Punoletan je",daLiJePunoletan)

//funcije

// DRY

// Dont repeat yourself 

// function ime_funkcije () {
//     // radnja
// }

// function saberi_tri_pet () {
//     const zbir = 3 + 5;
//    return zbir;
// }

// function saberi (prviBroj, drugiBroj) { 
//     return prviBroj + drugiBroj;
// }

// function pozdrav (ime) {
//     alert("Pozdrav" + " " + ime)
// }

// function inchToCm(inch) {
//     return inch * 2.54;
// }

// const visina = inchToCm(25);

// console.log(visina);


// const zbir_tri_pet = saberi_tri_pet(); //dao sam vrednodst varijabli onoj funkciji koju je vrednost vratila

// console.log(saberi_tri_pet);  

// const saberi = function() {
//     // //funkcija
// }



//const  arroisjdaiwFunc = () {
//}

// console.log(zbir_tri_pet);

// const inchToCm = (inch) => 
//  inch * 2.54;

// const saberi = (a, b) => a + b;

// console.log(saberi(10, 1));

// const name = "Faris";

// function nekaFunkcija() {

// const name = "Jusuf ";
// }


function sabiraj(prvi, drugi, treci = false) {
    if(treci) {
        return prvi + drugi + treci; 
    } else {
        return prvi + drugi;
    }
    

}

/napraviti program koji ce tri puta korisnika da uzme tri broja i da pomnozi jedan puta drugi [uta  treci] i taj zbir  se prikaze u alert 
//napravi se petlja i kolko brojeva s/e unese toliko puta da se okrene .




console.log(sabiraj(2,2,6));

