// Task 1***

const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
console.log(toCelsius(32));
console.log(`The temperature is ${toCelsius(32)} \xB0C`);

// Task 2***

const findMinMax = (arr) => ({min: Math.min(...arr), max: Math.max(...arr)});
console.log(findMinMax([1, 2, 3, 4, 5]));

// Task 3***

(function(length, width){
    const area = length * width;
    console.log(`A rectangle with a length of ${length} and a width of ${width} has an area of ${area}.`);
})(10, 5);
