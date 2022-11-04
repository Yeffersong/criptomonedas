
import axios from "axios";
import { useState, useEffect } from "react";

const usePetition =  ( endpoint ) => {

    const urlApi = import.meta.env.VITE_API_URL;
    const [data, setData] = useState();
    const [cargando, setCargando] = useState()

    useEffect(()=>{

        setCargando(true)
        axios.get(`${urlApi}${endpoint}`)
            .then( data => {
                setData(data.data.data)
                setCargando(false)
            })
            .catch( e => {
                setCargando(false)
                console.error(e)
            })

    }, [])



    return [data, cargando]
}

export {usePetition}