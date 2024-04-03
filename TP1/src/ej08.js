/* Módulo OMDBWrapper*/
import axios from "axios";

const APIKEY = "288a0ef8";

const BASE_URL = "https://www.omdbapi.com/";

const OMDBSearchByPage = async (searchText, page = 1) => {

let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};

const OMDBSearchByPage = async (searchText, page = 1) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: APIKEY,
                s: searchText,
                page: page
            }
        });
        
        const { data } = response;
        
        return {
            respuesta: true,
            cantidadTotal: parseInt(data.totalResults),
            datos: data.Search
        };
    } catch (error) {
        console.error("Error en OMDBSearchByPage:", error.message);
        return {
            respuesta: false,
            cantidadTotal: 0,
            datos: {}
        };
    }
};

return returnObject;
};


const OMDBSearchComplete = async (searchText) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};
const OMDBSearchComplete = async (searchText) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: APIKEY,
                s: searchText
            }
        });
        
        const { data } = response;
        
        return {
            respuesta: true,
            cantidadTotal: parseInt(data.totalResults),
            datos: data.Search
        };
    } catch (error) {
        console.error("Error en OMDBSearchComplete:", error.message);
        return {
            respuesta: false,
            cantidadTotal: 0,
            datos: {}
        };
    }
};

return returnObject;
};


const OMDBGetByImdbID = async (imdbID) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};
const OMDBGetByImdbID = async (imdbID) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: APIKEY,
                i: imdbID
            }
        });
        
        const { data } = response;
        
        return {
            respuesta: true,
            cantidadTotal: 1,
            datos: data
        };
    } catch (error) {
        console.error("Error en OMDBGetByImdbID:", error.message);
        return {
            respuesta: false,
            cantidadTotal: 0,
            datos: {}
        };
    }
};

return returnObject;
};


export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};
