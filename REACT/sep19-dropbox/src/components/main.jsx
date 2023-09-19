import React from 'react'
import video from '../assets/imgs/Dropbox_video.mp4'

const Main = () => {
  return (
    <>
      <main>
        <section>
            <div className="parte1 ocultar">
                <p className="h1">Únete a los más de 700 millones</p>
                <p className="h1">de usuarios registrados que</p>
                <p className="h1">confian en Dropbox</p>
                <p className="texto">Facil de utilizar, privado y seguro. No es de extrañar que Dropbox se ala elección par almacenar y compartir tus archivos más importantes.</p>
                <button className="encuentra">Encuentra tu plan<span><i className="fa-solid fa-arrow-right" ></i></span></button>
            </div>
            <div className="parte1-1">
                <p className="h1-1">Únete a los más de 700 millones</p>
                <p className="h1-1">de usuarios registrados que</p>
                <p className="h1-1">confian en Dropbox</p>
                <p className="texto-1">Facil de utilizar, privado y seguro. No es de extrañar que Dropbox se ala elección par almacenar y compartir tus archivos más importantes.</p>
                <button className="encuentra-1">Encuentra tu plan<span><i className="fa-solid fa-arrow-right" ></i></span></button>
            </div>
            <div className="parte2">
                <video src={video} width="500" height="300" controls autoplay loop></video>
            </div>
        </section>
        </main>
    </>
  )
}

export default Main
