import { Fragment, useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  
  const [criptos, setCriptos] = useState();


  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}assets`)
      .then( data => {
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error('la petición fallo')
      })

  }, [])

  if(!criptos){return (<span>Cargando...</span>)}

  return (
    <Fragment>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {criptos.map( cripto => 
          <li key={cripto.id} >Nombre: {cripto.name} Precio: {cripto.priceUsd}</li>
        )}
      </ol>
    </Fragment>
  )
}

export  {App}
