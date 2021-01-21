import { server } from '../environment/environment';


 function createGetRequest(route) {
    return new Promise( async (resolve, reject ) => {
        try {            
            const abortController = new AbortController();  
            const signal = abortController.signal;
            const url = `${server.HOST_API}/${route}`; 
            const response = await fetch(url , {signal: signal});
            const dataResults = await response.json(); 
            resolve(dataResults);    
            return function cleanup() {
                abortController.abort();
            }
        } catch (error) {
            reject(error);
        }
    });
}

const api = {
    info: {
        async getCharacters( page ) {
            const path = `${server.PATH_CHARACTER}/?page=${page}`;
            return  createGetRequest(path);
        },
        async getCharactersByName( someName ) {
            const path = `${server.PATH_CHARACTER}/?name=${ someName }`;
            return  createGetRequest(path);
        }
    }
}

export default api;
