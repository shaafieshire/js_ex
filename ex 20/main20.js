/// map

let fruits = ["apple", "banana", "orange"];
let fruitNames = fruits.map((fruit, index) => {
   return `${fruit} =  ${fruit.length}`
});
console.log(fruitNames);   

///output = ["apple = 5", "banana = 6", "orange = 6"]