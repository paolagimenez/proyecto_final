import './Filters.css';

export default function Filters({nombreFiltro,datoFiltro,muestraValor}) {

    return(
        <div className="form-check form-switch px-5 py-2"> 
        <input className="form-check-input" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={muestraValor}/>
        <label className="form-check-label" htmlFor={datoFiltro}>{nombreFiltro}</label>
    </div>
    )
}