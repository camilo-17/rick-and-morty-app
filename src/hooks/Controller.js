import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Controller = () => {

    const initData = [...Array(10)].map((_,i) => ++i+"");
    const [ open, setOpen ]               = useState({show: false, msg: ''});
    const [ data, setData ]               = useState(initData);
    const [ error , setError ]            = useState({status: false, limit: false});
    const [ counter, setCounter ]         = useState(1);
    const [ numberPages, setNumberPages ] = useState(2);
    const [ search, setSearch ]           = useState('');
      
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
                console.log(`entre al efecto de data`)
                setNumberPages(dataResults.pages);
                setData(counter !== 1 ? data.concat(dataResults.results) : dataResults.results);           
            } catch (error) {
            setError({status: true, limit: false});
            console.log(error);
            }
        }
        getData();  
      }, [counter, search]);

      useEffect(() => {
        if(search === '') {
            setCounter(1);
            return;
        }
        async function getData() {
            try {
                console.log(`entre a search`)
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
        // console.log(search);

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
         setSearch
        }  
}

export default Controller
