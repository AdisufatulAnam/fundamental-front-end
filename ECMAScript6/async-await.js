const getCoffee=()=>{
    return new Promise((resolve,reject)=>{
        const seeds=100;
        
        setTimeout(()=>{
            if (seeds >= 10){
                resolve('coffee didaptkan !');
            }else{
                reject('biji kopi habis');
            }
        },1000);
    });
};
//sebelum mengunakan asyns/await
// function makeCoffee(){
//     getCoffee()
//     .then(Coffee=>{
//         console.log(Coffee);
//     });
// }
// makeCoffee();
//setelah mengunakan async/await
// async function makeCoffee(){
//     const coffee= await getCoffee();
//     console.log(coffee);
// }
// makeCoffee();

//untuk mengunakan onrejectreason sebeprti berikut.
async function makeCoffee() {
    try {
      const coffee = await getCoffee();
      console.log(coffee);
    } catch (rejectedReason) {
      console.log(rejectedReason);
    }
  }
  makeCoffee();
