import React from 'react'

const Header = () => {
  return (
    <>
              <header>
        <div class="titulo-logo">
            <img src={} alt="...logo"/>
            <p class="ocultar"><strong>Dropbox</strong></p>
        </div>
        <nav class="navegador">
            <ul class="primerLinks ocultar">
                <li><a href="#">¿Por qué Dropbox</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Soluciones</a></li>
                <li><a href="#">Precios</a></li>
            </ul>
            <ul class="segundoLinks">
                <li class="ocultar"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h16.8" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                  </svg></li>
                <li class="ocultar"><a href="#">Contacto</a></li>
                <li class="ocultar"><a href="#">Obtener aplicación</a></li>
                <li><a href="#">Registrarse</a></li>
                <li><a href="#">Inicia Sesión</a></li>
                <li class="ocultar"><button class="comenzar">Comenzar <span><i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i></span></button></li>
                <li class="hamburguesa"><button class="menu"><i class="fa-solid fa-bars" style="color: #454545;"></i></button></li>
            </ul>
            
        </nav>
    </header>
    
    </>
  )
}

export default Header
