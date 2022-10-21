//sebelum mengunakan ecmascript6
// function Car(manufacture, color) {
//     this.manufacture = manufacture;
//     this.color = color;
//     this.enginesActive = false;
//   }
   
//   Car.prototype.startEngines = function () {
//     console.log('Mobil dinyalakan...');
//     this.enginesActive = true;
//   };
   
//   Car.prototype.info = function () {
//     console.log('Manufacture: ' + this.manufacture);
//     console.log('Color: ' + this.color);
//     console.log('Engines: ' + (this.enginesActive ? 'Active' : 'Inactive'));
//   };
   
//   var johnCar = new Car('Honda', 'Red');
//   johnCar.startEngines();
//   johnCar.info();


//setelah mengunakan ecmascript6
class car{//class car
    constructor(manufacture,color){//kontruktor untuk menetapkan nilai awal dari class
        this.manufacture=manufacture;
        this.color=color;
        this.enginesActive=false;
    }
    startEngines(){
        console.log(`Mobile dinyalakan ....`);
        this.enginesActive=true;
    }
    info(){
        console.log(`manufacture: ${this.manufacture}`);
        console.log(`color: ${this.color}`);
        console.log(`engines : ${this.enginesActive ? 'Active':'inactive'}`);
    }
}

const johnCar= new car('honda','red');
johnCar.startEngines();
johnCar.info();