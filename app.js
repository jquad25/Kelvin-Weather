//forecast today in Kelvin
const kelvin = 273;

//convert Kelvin to Celsius
const celsius = kelvin - 273;

//convert Celsius to Fahrenheit
fahrenheit = celsius * (9/5) + 32;
//round fahrenheit to a whole number
Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

//convert Celsius to Newton
newton = celsius * (33/100);
Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)