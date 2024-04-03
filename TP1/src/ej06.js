let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);

function parsearUrl(laURL) {
  try {
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
  catch (error) {
    console.error("Error al parsear la URL:", error.message);
    
    return {
      host: null,
      pathname: null,
      parametros: {}
    };
  }
}

// Ejemplo de uso

console.log(miObjeto);
