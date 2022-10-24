// console.log('Selamat Datang');
// setTimeout(()=>{
//     console.log('terima kasih sudah mampir ,silahkan datang kembali')

// },9000);
// console.log('ada  yang bisa kami bantu ?');

// const getCake = () => {
//     let cake = null;
//     console.log('Sedang membuat kue, silakan tunggu ....');
    
//     setTimeout(() => {
//       cake = 'Kue Selesai!';
//     }, 3000);
    
//     return cake;
//   };
   
//   const cake = getCake();
//   console.log(cake);
   
const getCake= callback=>{
    let cake=null;
    console.log('sedang membut kue, silahkan tunggu....');
    setTimeout(()=>{
        cake='kue selesai';
    },3000);
    return cake;
}