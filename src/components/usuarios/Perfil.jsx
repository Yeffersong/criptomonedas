import { Fragment, useContext } from "react"
import { UserContext } from "../../context/UserContext"



const Perfil = ( ) => {


    const Usuario = useContext(UserContext)

    return(
        <Fragment>
            <h2>Hola me llamo {Usuario.name}</h2>
            <h3>{Usuario.registered}</h3>
        </Fragment>
    )
}

export {Perfil};
