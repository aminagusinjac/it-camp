// (prom = new Promise((res, rej) => {
//     res();
// });

// prom.then (()=> {
//     prom.then(()=> {
//         console.log("B");
//     });
//     console.log("A");
// });

// prom.then(()=> {
//     console.log("C");
// });

// console.log(a);


// var1 = function () {

// }

// var1 = [12, 3, 23, 2 ];


// var1.map(()=> {

// })

// setTimeout(
//     () => {},
//     () => {},
//     1000
// );



// function setTimeoput(arg1,arg2,arg3) {
//     arg1();
//     arg2();
// };



// function setTimeout(arg1, arg2, arg3) {
//     arg1();
//     arg2(); 
// }

// //fetch se odnosi kad zelimo da kupimmo inf s nekog servera 


// //frontend ono so vidi korisnik
// //beking ono sto se nalazi unutra sto ne vidi korisnik



// //zadatak objekti 


// //zadatak niz objekata 

// const students =[
//     {name:'Faris', grade: 9, year:2},
// {
//     name:'Faris', grade: 9, year:2
// },
// {
//     name:'Faris', grade: 9, year:2
// },
// {
//     name:'Faris', grade: 9, year:2
// },
// {
//     name:'Faris', grade: 9, year:2
// },{
//     name:'Faris', grade: 9, year:2
// },{
//     name:'Faris', grade: 9, year:2
// }]

// function getAvgarde(array){
//     const nizOcena =array.map((el)=> el.grade)
//     console.log(nizOcena)
//     const zbirOcena =  nizOcena.reduce((prev,curr)=> prev + curr)

// console.log(zbirOcena)

// const prosek = zbirOcena/nizOcena.length
// console.log(prosek)
// const zaokruzeno=prosek.toFixed(2)
// console.log(+zaokruzeno)
// return +zaokruzeno}
// console.log(getAvGrade(students))










// const getUsers = () => {
//     fetch("htttp://jsplaceholder.typicode.com/todos/1").then((response)=> 
//     console.log(response.json())
//     ).then(res=> console.log(res));
// };   //json je objekat linija pomocu  koje stizemo iz bekenda 

//.then((response) => console.log(response.json()))

//drugi zadatak
 //pravimo niz Id-jeva

// const getUsers = async () => {
//     const response = await fetch("http://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();
//     return posts;


    
// };

// getUsers().then((res) => console.log(res));


//1 zadataak osnovne stvari
//2map  filter reduce   

//3prommice

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getUsers =  async () => {
    const response =await fetch(`${BASE_URL}/users`);
    const users = await response.json();
    return users;
};

const myUsers = getUsers().then((users)=> {
    const newUSers = users.map((el) => {
        return {
            name: el.name,
            username: el.username,
            phone: el.phone,
        };
    });
    return newUSers;
});

myUsers.then((res)=> console.log(res));







