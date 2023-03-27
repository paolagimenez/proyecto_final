import { Link } from "react-router-dom";
import {Fragment  } from "react";
import "./Home.css";
import {useState} from 'react';

/* Este componente corresponde a la pagina inicial (la del cuadrado blanco con los botones.
    La navegacion de las hojas secundarias las hacemos en el componente Navegation*/

export default function Home() {
    return (  
        <header className = "principal-search d-flex flex-column align-items-center justify-content-center">
            <div className= "container-header d-flex flex-column justify-content-center">
                <h1 className = "row justify-content-center">Proyecto - Rick & Morty</h1>
                <nav className= "row navBar align-items-center">
                    <ul className = "nav justify-content-center">
                        <li>
                            <Link className="btn m-2 p-3 botones" to="/characters">Characters</Link>
                        </li>
                        <li>
                            <Link className="btn m-2 p-3 botones" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav> 
            </div>
        </header>
    )
  }