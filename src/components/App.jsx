import { Fragment } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { Menu } from "./menu/Menu"
import './App.css'

const App  = () => {

    if (!localStorage.getItem("tokenLogin")) return <Navigate to="/login" />

    return(
        <div className="app-container">
            <Menu/>
            <Outlet/> {/* es reemplazado según sea el anidamiento de ruta */}
        </div >
    )
}


export {App}