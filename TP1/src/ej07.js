//Instalamos npm i currency-map-country
import { getCountry, getCurrency } from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

// FUNCION

function obtenerMoneda(codigoPais)
{
    const pais = getCountry(codigoPais);
    if(pais != undefined){
        let moneda = getCurrency(pais.cur);
        return moneda.name;
    }
    else{
        return "No se encontró";
    }
}