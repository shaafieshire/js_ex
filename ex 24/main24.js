///// default parameters

function calculateArea(width , height = width) {
   return width * height;
}

console.log(calculateArea(5, 3)); // Output: 15
console.log(calculateArea(5)); // Output: 25