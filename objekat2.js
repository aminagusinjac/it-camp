const telefon ={
    id: 1,
    marka: "iphone",
    
    memorija: 128,
    boja: "lila",
    velicina: 12,
    kamera: {
        prednja: "120 mp",
        zadnja1: "150mp",
        zadnja2: "140mp",
        porudzbina: function(){
            console.log(this)
        },
    }

}
telefon.kamera.porudzbina()
console.log("moj telefon je marke", telefon.marka)

telefon.kamera.porudzbina()  

//Auto, make, model, maxspeed, currentSpeed, drive, brake, stop.

//koci - smanji brzinu za 10
//stop - brzina 0

//160, i treba da smanji brzinu do 80, i da stane


const car = {
 make: "Mercedes",
  
    model: 'a3',
    maxspeed:   220,
    currentSpeed:  0,
    drive: function(value){
        this.currentSpeed += value;
        if (this.currentSpeed + value> this.maxspeed) {
        //  alert("Vozite prebrzo")
        alert ("Ide preko ogranicenja ");
        } else {
             this.currentSpeed += value;
        }
    },

    brake: function() {
       this.currentSpeed -= value;
      
    },
    stop: function () {
        this.currentSpeed = 0;
    },
};
// car.drive();
// car.drive();
// car.drive();
// car.drive();
// car.drive();
// car.drive();
// car.drive();
// car.drive();
// car.brake();
// car.brake();
// car.brake();
// car.brake();



car.drive(180);
car.drive(20);
// car.drive(411)
// car.brake(30)
console.log(car);






