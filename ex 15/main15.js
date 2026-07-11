//// loop for...of and for.....in
const people = [
   { name: "Ali", age: 25, city: "Tehran" },
   { name: "Ahmed", age: 30, city: "Isfahan" },
   { name: "Mohammed", age: 35, city: "Shiraz" }
]; 


for ( const person of people ) {
    console.log(person.name + ", " + person.age + ", " + person.city);
} 
/// output: 
/// Ali, 25, Tehran
/// Ahmed, 30, Isfahan
/// Mohammed, 35, Shiraz
