import {useState} from 'react';
import './Card.css'

export default function Card({info}) {

    const[ocultar,setOcultar]=useState(true);

    const mostrar =()=>{
        console.log(info)//objeto con la info del personaje
        setOcultar(false)
    }
    const ocultarInfo=()=>{
        setOcultar(true)
    }
    return(
        <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
            <div className='d-flex flex-column justify-content-between align-items-center'>
                <img src={info.image} alt={info.name}/>
                <h3>{info.name}</h3>

                <button onClick={mostrar} className={ ocultar === true ?"btn btn-active align-self-end":"d-none"}>Now More..</button>  
      
            </div>
            {ocultar ===false?
                <div className='p-5 d-flex flex-column align-items-center'>
                    <button className="btn btn-active d-flex align-self-end m-2" onClick={ocultarInfo}>X</button>
                    <ul className="list-group">
                        <li className="list-group-item p-3 fw-bold">Character status {info.status}</li>
                        <li className="list-group-item p-3">
                            <div className='ms-2'>
                                Species 
                                <div className='fw-bold'>{info.species}</div>
                            </div>
                        </li>
                        <li className="list-group-item p-3">
                            <div className='ms-2'>
                                Origin 
                                <div className='fw-bold'>{info.origin.name}</div>
                            </div>
                        </li>
                        <li className="list-group-item p-3">
                            <div className='ms-2'>
                                Gender 
                                <div className='fw-bold'>{info.gender}</div>
                            </div>
                        </li>
                    </ul>
                </div>:''
            }
        </div>
    )
}