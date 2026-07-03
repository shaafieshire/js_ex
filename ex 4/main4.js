// function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}

 greet("Saafie"); // result: "Hello, Saafie!"
 greet("Shire"); // result: "Hello, Shire!"
 greet("Amina"); // result: "Hello, Amina!"
 greet("Sahra"); // result: "Hello, Sahra!"


 // return the total
function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(calculateTotal(10, 5)); // result: 50
console.log(calculateTotal(14,8)); // result: 112

//function Expression
let greetExpression = function(name) {
  return "Welcome , " + name + "!";
};

console.log(greetExpression("Saafie")); // result: "Hello, Saafie!"