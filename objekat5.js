//LET I CONST GLAVNA RAZLIKA JE VIDLJIVOST 


var a = 10;

if (true) {
    var a = 12;
    //let a = 12;//global function
    console.log(a);
}


console.log(a);


//izbegavati var 
for (var i=0; i<10; i ++) {
    setTimeout
(()  => { console.log(i);
}, 0);
}
//hoisting
var a;
a = 10;
console.log(a);

var a = 10;

//varijabla ima deklaraciju i definiciju , java s celu deklaraciju premesta na vrh 

mojaFunc ();

function mojaFunc() {
    console.log("asdsad")
}
mojaFunc()


function mojaFunc() {
    function drugafunc() {
        console.log("drugaaa");
    }
    return drugafunc();
    
}

//mojaFunc() () jedan nacin
//res = 083
res = mojaFunc (); //drugi nacin

res();


function mojaFunc( ) {
    a=10 ;  //cuva se sa strane ali se poziva dole

    function drugafunc(arg1) {

        console.log("drugaaa");
        console.log(arg1 +a);

    }

    return drugafunc;
}


res= mojaFunc();

res(5);  //ovaj mehanizam naziva se klozn (clousn)   


