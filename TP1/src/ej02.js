import { PI, sumar, multiplicar, restar, createArray } from './modules/matrmatica.js'; 

var total, numero1 = 10, numero2 = 20;
console.clear();
console.log(`La constante PI vale '${PI}'`);
total = sumar(numero1, numero2);
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);


const arr = createArray(numero1, numero2);

for (let i = 0; i < arr.length; i++) { 
    console.log(arr[i]);
}
