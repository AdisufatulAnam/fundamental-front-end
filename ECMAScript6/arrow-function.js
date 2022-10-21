//sebelum arrow function
// const upperizedNames = ['Dimas', 'Widy', 'Buchori']
//     .map(function (name) {
//       return name.toUpperCase();
//     });
 
// console.log(...upperizedNames);

//setelah arrow function
// const upperizedNames = ['Dimas', 'Widy', 'Buchori']
//     .map(name => name.toUpperCase());
 
// console.log(...upperizedNames);


//lebih dari dua paremter yang digunakan.
// const sayHello = (name, greet,feshName) => console.log(`${greet},${name}, ${feshName}!`);
 
// sayHello('Dimas', 'Selamat Pagi','anam');

//apabila hanya mengunakan satu parameter.
// const sayHello=()=>console.log('selemat datang mas anam');
// sayHello();

//mengunakan perulangan for untuk lebih dari satu baris 
const sayHello = language => {
    if (language.toUpperCase() === 'INDONESIA') {
      return 'Selamat Pagi!';
    } else {
      return 'Good Morning!';
    }
  }
   
  console.log(sayHello('' ));