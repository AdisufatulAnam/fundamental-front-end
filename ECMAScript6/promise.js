// const exsekutorFunction=(resolve, reject)=>{
//     const isCoffeeMakerReady=true;
    
//     if(isCoffeeMakerReady){
//         resolve('kopi berhasil dibuat');
//     }else{
//         reject('mesin kopi tidak bisa digunakan');
//     }
// };
// const makeCoffee=new Promise(exsekutorFunction);
// console.log(makeCoffee);

//funsi onfulfiled dan onreject
const exsekutorFunction=(resolve, reject)=>{
    const isCoffeeMakerReady=false;
    if (isCoffeeMakerReady) {
        resolve('kopi berhasil dibuat');    
    }else{
        reject('mesin kopi tidak bisa digunakan !');
    }
};
const handlerSuccess=resolvedValue=>{
    console.log(resolvedValue);
};
const handlerRejected=rejectionReason=>{
    console.log(rejectionReason);
};
// const makeCoffee=new Promise(exsekutorFunction);
// makeCoffee.then(handlerSuccess,handlerRejected);


// onRejeck mengunakan catch method
const makeCoffee=new Promise(exsekutorFunction);
makeCoffee
.then(handlerSuccess)
.then(null,handlerRejected);
