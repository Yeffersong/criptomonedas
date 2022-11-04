
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { usePetition } from "../../hooks/usePetition";
import "./CriptoPage.css";
import { CriptoHistorial } from "./Info/CriptoHistorial";
import { CriptoInfo } from "./Info/CriptoInfo";

const CriptoPage = () => {
    const params = useParams();

    const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`);
    const [history, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=d1`);

    if (cargandoCripto || cargandoHistory ) return <span>Cargando...</span>

    return (
        <Fragment>
            <div className="cripto-page-container">
                <div className="info">
                    {cripto && (
                        <CriptoInfo cripto = {cripto} />
                    )}
                </div>
                <div className="history">
                    {history && (
                        <CriptoHistorial history = {history}/>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export { CriptoPage };
