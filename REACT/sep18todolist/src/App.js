import React, { useRef , useState} from 'react'
import './App.css' 

const App = () => {
  const texto = useRef();
  const [tareas, setTareas] = useState([]);

  function agregar(){
    const nuevaTarea = texto.current.value;
    setTareas([...tareas, nuevaTarea]);
    texto.current.value = ''
  }

  function eliminarTarea(){
    
  }
 
  return (
    <>
        <h1 className='titulo'>To-Do List</h1> 
        <div className='caja'>
          <input className='inputCaja' ref={texto} type="text" placeholder='Agrega tu tarea.'/>
          <button className='botonCaja' onClick={agregar}>Agregar</button>
        </div>
        <ul className='listado'>
          {tareas.map((actividad,llave)=> (
            <div className='tareas'>
              <li key={llave}><input className='check' type='checkbox'/> {actividad}</li>
              <button className='botonEliminar' onClick={eliminarTarea}><i class="fa-solid fa-xmark"></i></button>
            </div>
            
          ))}
        </ul>
    </>
  )
}

export default App


