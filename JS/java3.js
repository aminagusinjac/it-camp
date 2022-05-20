//const rec = "Sta ste radili danAs";
//const counter = 0;

//for (let i = 0; i < rec.length; i ++) {
    //if (rec[i].toLocaleLowerCase () === "a" ){
        //counter++;
    //}
//}

//console.log(counter);


const string = "ovo je string";
let newString = "";

for (let i = 0; i < string.length; i ++) {
    const element = string [i];

    if(i === 0) {
        newString += element.toLocaleUpperCase ();
    } else if (string [i-1] ===  ""){
        newString += element.toLocaleUpperCase ();
    } else {
        newString += element;
    }
}
console.log(newString);

//novi zadatak
const string = "ovo je string";
let newString = "";

for (let i === string.length - 1; i ++) {
    const element = string [i + 1];

    if(i === 0) {
        newString += element.toLocaleUpperCase ();
    } else if (string [i-1] ===  ""){
        newString += element.toLocaleUpperCase ();
    } else {
        newString += element;
    }
}
console.log(newString);





