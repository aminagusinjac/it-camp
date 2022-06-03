//ZADATAK 1

// const miles = [15, 20, 1, 60, 45, 120]

// const prviZadatak = (array) => {

// const milesToKilometers = array.map ((el)=> el * 1.60 );

// const totalDistanceInKilometers=milesToKilometers.reduce((prev, curr) => prev + curr)

// return totalDistanceInKilometers;
// }

// console.log(prviZadatak(miles))


//ZADATAK 2

//SABRATI KVADRATE A ONDA SUMIRATI map vraca drugi niz , filter ne menja niz , samo ga pretrazujr 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const drugiZadatak=(array)=>
// {
//    const parniNiz= array.filter((el)=> el%2===0)

//    const kvadratParnih = parniNiz.map((el) => el * el)

//    const suma=kvadratParnih.reduce((prev, curr) => prev + curr )
// return suma;

// } 

// console.log(drugiZadatak(numbers))

//treci zadatak

// let strings = ["avengers", "captain america", "ironman", "black panther"]

// const toUppercase = (array) => {
//     const newString = array.map => (el)    
// }

//IZ NIZA IZDVOJITI PARNE PA KVADRAT PARNIH , PA SUMIRATI

// let numbers=[1,2,3,4,,6,7,8,9,10]

// const prviZadatak = (array) => {
//      const parni  = array.filter((el)=> el%2 === 0)
//     //  return parni;
//     const kvadratParnih =parni.map((el)=> el * el)
//     // return kvadratParnih
//       const suma = kvadratParnih.reduce((prev, curr)=> prev + curr)
//       return suma 

//  }


// console.log(prviZadatak(numbers))

//TRECI ZADATAK TREBA DA NAPISE SVE VELIKIM SLOVIMA 

// let strings = ["avengers", "captain america", "ironman", "black panther"];
 
// const zadatak = (array) => {
//   const newString = array.map((el)=> el.toUppercase( ))

// return newString
// }

//  console.log(zadatak(strings))


//ZADATAK IMAMO NIZ GODINA, NACI SREDNJU VREDNOST 

// const niz=[1,2,3,4,5,6,7]

// const srednjaVrednost = (array) =>  {

// const zbir = array.reduce((prev, curr) => prev + curr)
// // return zbir

// srednja = zbir/array.length
// return srednja
// }

// console.log(srednjaVrednost(niz))


//ZADATAK EVERY VRACA TRUE ILI FOLCE

// const niz = [2,3, 5, 7, 8, 9]

// const zadatak = (array) => {
//     const svaki=array.every((el)=> el<10)
//     return svaki
// }

// console.log(zadatak(niz))

//prosti pdaci su primitivni tipovi:string -karateri kao space,brojevi,bolean ,true, folse-negativne netacne vrednosti, 
//veliki podaci su objekti
//NAUCITI LOGICKE OPERACIJE 
//operatori: folse i folse daje true 
//FOLCE I TRUE DAJE TRUE 
//not 
//end 
//i  - i jedna i druga vrednost su tacnet true and true = true
//true&&true uvek je tacan ako je bilo koji od dva tacan
//rezultat uporedjivanja dve vednosti je boolean npr 10>5 
//console.log(10 == 10) s dva jednako uporedjujemo 2 vredosti
//tri jednako kad uporedjujemo 10===10 da li je 10!== 10 false 
//console.log("hello" + "world")
//  for (let i = 0; i < 10; i ++) {

//  }
//  //operator dodele vrednosti var1=10
//  //var2=var1
// //niz: clanovi niza i indeks 

// var1 =[32,24,"hello",false,78.45];
// //     0  1    2      3   4 

// console.log(var1[2]+6);

// for  (let i = 0; i < var1.length; i ++) {
// console.log(var1[i]);
// console.log(var1[i],i);
// }

//var1.unshift ("nova vrednost") pomerimo prvi pa dodadmo
//var1.shift ulevo pomeranje elemenata uklanjane prvi element 
//pop iskakanje 
//push
// var1.pop();
// //slice kopira parce niza kopira ga i svrstava u novu varijablu 

// var2 = var1.slice(0,3);
// //splice naaacin da uklonimo element iz sredine niza  kreni od indeksa 2 , ukloni jedan element , i na njegovo mesto i nakon njega dodao 3 vrednosti i false
// var1.splice(2,1, "novavred1" , "novavred2", "novavred3");
// console.log(var1);
// console.log(var2);
//prvi niz je isti a drugi kopiija parceta

//  const niz = [1,2,45,41,54,65,76,89,95,10]

//  const zadatak =(array)=> {
//     const parni= array.filter((el)=> el%2===0)

//       //returnparni
    
//        const suma=parni.reduce((prev, curr) => prev + curr )
//     return suma;
//  }
 
//  console.log(zadatak(niz))

// spojeniNiz.forEach(el, index, arr) => {
//     console.log(sumaEL);

// }

niz2=niz.filter((el, i) => {
    if (i>3) {
        return el;
    }
});

console.log(niz2);
//for each ne kreira novi niz
//map menja niz, vraca isi broj elem
niz2 = niz.map(el => {
if (el%2 ===0){ return el;}
});
console.log(niz2);

//filter kreira novi niz sa elemen koji su ispunnili niz, ne vraca istu duzinu






