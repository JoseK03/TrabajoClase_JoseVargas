import React, { useRef, useState } from 'react'
import Tareas from './Tareas';

export const Main = () => {
    const [data, setData] = useState([])
    const dataImput = useRef();

    function imprimir(){
        setData([...data, dataImput.current.value]);
    }

    function borrarData (index){
      const nuevaLista = [...data];
      nuevaLista.splice(index,1);
      setData(nuevaLista);
      
  }
  return (
    <>
        <h1 className='titulo'>To-Do List</h1>
        <div className='caja'>
        <input type="text" className='inputCaja' ref={dataImput}/>
        <button onClick={imprimir} className='botonCaja'>Agregar</button>
        </div>
        <Tareas parametro={data} borrarActividad={borrarData}></Tareas>
    
    
    </>
  )
}

export default Main