import React from 'react'
import logoDP from '../assets/imgs/logo.png'
import './../App.css'

const Header = () => {
  return (
    <>
              <header>
        <div className="titulo-logo">
            <img className='png' src={logoDP}/>
            <p class="ocultar"><strong>Dropbox</strong></p>
        </div>
        <nav className="navegador">
            <ul className="primerLinks ocultar">
                <li><p>Productos</p></li>
                <li><p>Soluciones</p></li>
                <li><p>¿Por qué Dropbox</p></li>
                <li><p>Precios</p></li>
            </ul>
            <ul className="segundoLinks">
                <li className="ocultar"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h16.8" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                  </svg></li>
                <li className="ocultar"><p>Contacto</p></li>
                <li className="ocultar"><p>Obtener aplicación</p></li>
                <li><p>Registrarse</p></li>
                <li><p>Inicia Sesión</p></li>
                <li className="ocultar"><button className="comenzar">Comenzar <span><i className="fa-solid fa-arrow-right"></i></span></button></li>
                <li className="hamburguesa"><button className="menu"><i className="fa-solid fa-bars"></i></button></li>
            </ul>
            
        </nav>
    </header>
    
    </>
  )
}

export default Header
