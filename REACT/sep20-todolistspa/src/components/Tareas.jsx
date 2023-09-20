import React from 'react'

export const Tareas = ({data,borrarActividad}) => {

    
  return (
    <div>
        <ul className='listado'>
            {data.parametro.map((element,index)=>{
            return (
                <div className='tareas'>
              <li key={index}><input className='check' type='checkbox'/> {element}</li>
              <button className='botonEliminar' onClick={()=>borrarActividad(index)}><i className="fa-solid fa-xmark"></i></button>
            </div>
             
                )})}
        </ul>
    </div>
  )
}
export default Tareas
