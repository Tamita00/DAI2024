let miUrl = null;
let miObjeto = null;

miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);


function parsearUrl(laURL){
    const miUrl = new URL(laURL);
    
    const parametros = {};
    for (const [clave, valor] of miUrl.searchParams.entries()) {
      parametros[clave] = valor;
    }

    return {
      host: miUrl.host,
      pathname: miUrl.pathname,
      parametros: parametros
    };

  }

console.log(miObjeto);