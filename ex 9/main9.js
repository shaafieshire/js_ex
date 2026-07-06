let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
      console.log("The Car Has Started" + " " + this.brand);
    }
} 

console.log(car);
car.start(); // output: "The Car Has Started Toyota"
// console.log(car); // output: { brand: "Toyota", model: "Camry", year: 2020 }
// console.log(car["brand"]); // output: "Toyota"
// console.log(car.model); // output: "Camry"
// console.log(car.year); // output: 2020