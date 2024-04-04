import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js";
let resultado = null;

resultado =  await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage: ", resultado);


let resultado2 = null;
resultado2 =  await OMDBSearchComplete("cars");
console.log("OMDBSearchComplete: ", resultado2);

let resultado3 = null;
resultado3 =  await OMDBGetByImdbID("288a0ef8");
console.log("OMDBGetByImdbID: ",  resultado3);
