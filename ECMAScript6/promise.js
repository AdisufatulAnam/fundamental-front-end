const exsekutorFunction=(resolve, reject)=>{
    const isCoffeeMakerReady=false;
    
    if(isCoffeeMakerReady){
        resolve('kopi berhasil dibuat');
    }else{
        reject('mesin kopi tidak bisa digunakan');
    }
};
const makeCoffee=new Promise(exsekutorFunction);
console.log(makeCoffee);