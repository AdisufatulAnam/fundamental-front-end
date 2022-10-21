// const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
 
// console.log(...favorites);

//mencari nilai array terbesar dengan mengunakan Math.max
// const numbers=[12,13,14,15,15,716];
// console.log(Math.max(...numbers));

//mengabungkan dua array dengan spread operator 
// const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
// const others = ['Cake', 'Pie', 'Donut']; 
// const allFavorites = [favorites, others];
 
// console.log(allFavorites);

//mengabungkan dua array menjadi satu
// const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
// const others = ['Cake', 'Pie', 'Donut'];
 
// const allFavorites = [...favorites, ...others];
 
// console.log(allFavorites);
function sum(...numbers) {
    var result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
   
  console.log(sum(1, 2, 3, 4, 5));