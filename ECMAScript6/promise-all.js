//orderan untuk kopi arabica
const arabicaOrder=()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('kopi arabika selesai');
        },4000);
    });
};
//orderan untuk robusta.
const robustaOrder=()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('kopi robusta selesai !');
        }, 2000);
    });
};
//orderan untuk liberica.
const libericaOrder=()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
        resolve('kopi liberica selesai !');
        }, 3000);
    });
};
//membuat parameter yang akan dibuat.
const promise=[arabicaOrder(),robustaOrder(),libericaOrder()];

//memanggil paramater yang ditentukan.
Promise.all(promise)
.then(resolvedValue=>{
    console.log(resolvedValue);
});