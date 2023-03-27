//Librerías
import{Fragment} from 'react';
import{useEffect, useState} from 'react';

//Componentes
import Navigation from '../Navigation/Navigation';
import Filters from "../Filters/Filters";
import SectionCards from "../SectionCards/SectionCards";
import './Characters.css'


export default function Characters() {
    let [datos,setDatos]=useState([]);
    let [infoCompleta,setInfoCompleta]=useState([]);
 
    const mostrarValor =(event)=>{

        // se fija si esta o no checked,tildado
        if(event.target.checked){
                let datoFiltro=event.target.value;
                if(datoFiltro === "Alive" || datoFiltro === "Dead"){
                let resultado= datos.filter((ch)=> ch.status === datoFiltro)//nuevo array con solo los elementos que cumplen la condicion
                    setDatos(resultado)
                }
                if(datoFiltro === "Female" || datoFiltro === "Male"){
                    let resultado= datos.filter((ch)=> ch.gender === datoFiltro)
                    setDatos(resultado)
                }
                if(datoFiltro === "unknown"){
                    let resultado= datos.filter((ch)=> ch.origin.name === datoFiltro)
                    setDatos(resultado)
                } 
                
         }else{
            setDatos(infoCompleta)
         }
    }

    const traerInfo=async()=>{
 
        let info= await fetch("https://rickandmortyapi.com/api/character")
                        .then(respuesta => respuesta.json())
                        .catch(error => console.log("HAY UN ERROR!!" +error))
        return info
        
    }

    const mostarInfo =async ()=>{
        let dato= await traerInfo()
        let infoPersonajes= dato.results
        console.log(infoPersonajes)
        setDatos(infoPersonajes)
        setInfoCompleta(infoPersonajes)
    }

     useEffect(()=>{
        mostarInfo() 
     },[])


    return(
        <Fragment>
            <Navigation />
            <main className='container'>
                <section className='row section-filters py-5'>
                    <h2>Filters</h2>
                    <div className='d-flex justify-content-between flex-wrap'>
                        <Filters nombreFiltro="Character Alive" datoFiltro="Alive" muestraValor={mostrarValor}/> 
                        <Filters nombreFiltro="Character Dead" datoFiltro="Dead" muestraValor={mostrarValor}/> 
                        <Filters nombreFiltro="Male" datoFiltro="Male" muestraValor={mostrarValor}/> 
                        <Filters nombreFiltro="Female" datoFiltro="Female" muestraValor={mostrarValor}/> 
                        <Filters nombreFiltro="Origin Unknown" datoFiltro="unknown" muestraValor={mostrarValor}/> 
                    </div>
                </section>               
                <SectionCards datos={datos} />
            </main>
        </Fragment>
    )
}