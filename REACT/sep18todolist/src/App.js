import React, { useRef , useState} from 'react'

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
      <h1>Añade tu tarea</h1>
      <div>
        <input ref={texto} type="text" placeholder='Agrega tu tarea.'/>
        <button onClick={agregar}>Agregar</button>
      </div>
      <ul>
        {tareas.map((actividad,llave)=> (
          <div>
            <li key={llave}>{actividad}</li>
            <button onClick={eliminarTarea}>Eliminar</button>
          </div>
          
        ))}
      </ul>

    </>
  )
}

export default App


