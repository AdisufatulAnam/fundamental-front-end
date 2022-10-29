//digunakan untuk memaggil ke file funcrion berada.
const {coffeeStock, milkSusu,isCoffeeMakerReady}= require('./state.js');
//untuk memanggil lebih dari satu makan hapus code bibawah.
// const makeCoffee=(type,miligrams)=>{
//     if (coffeeStock[type]>=miligrams) {
//         console.log('kopi berhasil dibuat!');
//     }else{
//         console.log('biji kopi habis!');
//     }
// };
console.log(coffeeStock);
console.log(milkSusu);
console.log(isCoffeeMakerReady);

// makeCoffee('arabica',10);
