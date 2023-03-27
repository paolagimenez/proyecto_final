import { Fragment } from 'react';
import Navigation from '../Navigation/Navigation'
import './Contact.css';

export default function Contact() {
  
    return(
        <Fragment>
            <Navigation/>
            <main className='container-fluid main-contact'>
                <div className='main-contact-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75'>
                    <h1 className='row color-blue'>Contact</h1>
                    <h2 className='row color-blue'>Leave us your information so we can contact you</h2>
                    <form className="row g-3 mx-4 color-blue" action=''>
                        <div className="col-md-6">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control p-2" id="nombre" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="correo" className="form-label">Email</label>
                            <input type="email" className="form-control p-2" id="correo" />
                        </div>  
                        <div className="col-12">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea id="mensaje" className="form-control p-4"></textarea>
                        </div>
                        
                        <div className="col-12">
                        <button type="submit" className="btn botones color-white">Sign in</button>
                        </div>
                    </form>
                </div>   
            </main>
        </Fragment>       
    )
}