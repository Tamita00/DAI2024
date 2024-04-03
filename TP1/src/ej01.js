let textoEntrada01 = "Escuela";
let textoEntrada02 = "ORT";
let textoSalida;

textoSalida = concatInvert(textoEntrada01, textoEntrada02);

console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1, texto2){
    let cad = texto1 + texto2;
    let separarCadena = cad.split("");
    let invertirArreglo = separarCadena.reverse();
    let returnValue = invertirArreglo.join("");
    return returnValue;
}
