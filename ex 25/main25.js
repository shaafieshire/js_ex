/// SPREAD AND REST OPORATORS

const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [6, 7, 8, 9, 10];

const allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); //output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
console.log(sumAll(6, 7, 8, 9, 10)); // Output: 40