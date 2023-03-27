
import { Link} from "react-router-dom";
import "./Navigation.css"
export default function Navigation() {
    return(
        
        <header className="d-flex flex-row align-items-center justify-content-between bg-blue"> 
            <h1 className="titulo-nav w-50">Ricky y Morty</h1>   
            <nav className="navbar navbar-expand-lg w-50 ">          
                <ul className="navbar-nav ms-auto">
                    <li>
                        <Link className="btn botones" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="btn botones btn-active" to="/characters">Characters</Link>
                    </li>
                    <li>
                        <Link className="btn botones" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
    }