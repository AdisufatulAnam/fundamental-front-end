//digunakan untuk memaggil ke file funcrion berada.
const coffeeStock= require('./state.js');

const makeCoffee=(type,miligrams)=>{
    if (coffeeStock[type]>=miligrams) {
        console.log('kopi berhasil dibuat!');
    }else{
        console.log('biji kopi habis!');
    }
};

makeCoffee('arabica',10);
