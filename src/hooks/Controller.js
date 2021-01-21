
import { useState, useEffect } from 'react';
import { server } from '../environment/environment';
import api from '../services/api';

const Controller = () => {

    const initData = [...Array(10)].map((_,i) => ++i+"");
    const [ open, setOpen ]               = useState({show: false, msg: ''});
    const [ data, setData ]               = useState(initData);
    const [ error , setError ]            = useState({status: false, limit: false});
    const [ counter, setCounter ]         = useState(1);
    const [ numberPages, setNumberPages ] = useState(2);
    const [ search, setSearch ]           = useState('');    
    const [ find, setFind ]               = useState(server.PATH_CHARACTER);
  
    useEffect(() => { 
        if(search !== '') {
            return;
        }
        if( numberPages <= counter) {
            setOpen({show: true, msg: 'No hay mas personajes!'});
            return;
        } 
        async function getData() {        
            try {
                const dataResults = await api.info.getCharacters(counter).catch((e) => setError({status: true, limit: false}));
                setNumberPages(dataResults.pages);
                setData(counter !== 1 ? data.concat(dataResults.results) : dataResults.results);           
            } catch (error) {
            setError({status: true, limit: false});
            console.log(error);
            }
        }
        getData();  
      }, [ counter, search ]);

      useEffect(() => {
        if(search === '') {
            setCounter(1);
            return;
        }
        async function getData() {
            try {
                const dataResults = await api.info.getCharactersByName(search)
                                                    .catch((e) => setError({status: true, limit: false})); 
                
                if(dataResults.hasOwnProperty('error')) {
                    setOpen({show: true, msg: 'No encontramos concidencias con tu busqueda!'});
                    setData([]);
                    return;
                } else {
                    setData(dataResults.results);
                }
            } catch (err) {
                
            }
        }
        getData();
      },[search]);

    return {
         open,
         setOpen,
         data,
         setData,
         error,
         setError,
         counter,
         setCounter,
         numberPages,
         setNumberPages,
         search,
         setSearch,
         find,
         setFind
        }  
}

export default Controller
