prom = new Promise((res, rej) => {
    res();
});

prom.then (()=> {
    prom.then(()=> {
        console.log("B");
    });
    console.log("A");
});

prom.then(()=> {
    console.log("C");
});

console.log(a);


var1 = function () {

}

var1 = [12, 3, 23, 2 ];


var1.map(()=> {

})

setTimeout(
    () => {},
    () => {},
    1000
);



function setTimeoput(arg1,arg2,arg3) {
    arg1();
    arg2();
};



function setTimeout(arg1, arg2, arg3) {
    arg1();
    arg2(); 
}

//fetch se odnosi kad zelimo da kupimmo inf s nekog servera 


//frontend ono so vidi korisnik
//beking ono sto se nalazi unutra sto ne vidi korisnik


// const getUsers = () => {
//     fetch("htttp://jsplaceholder.typicode.com/todos/1").then((response)=> 
//     console.log(response.json())
//     ).then(res=> console.log(res));
// };   //json je objekat linija pomocu  koje stizemo iz bekenda 

//.then((response) => console.log(response.json()))

//drugi zadatak
 //pravimo niz Id-jeva

const getUsers = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;

};

getUsers().then((res) => console.log(res));