import React, { useState , useEffect } from 'react'


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchApi = async (req, res, next) => {
    try {
      const reponse = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await reponse.json();

      console.log(data);
      if(response.ok){
        setData(data);
        setIsLoading(false);
      }else{
        setError('Error en la peticion')
      }
    } catch (error) {
      setError(error)
    }
  }

  useEffect(()=>{
    fetchApi();
  },[isLoading]);

  return (
    <>
      <h1>fetch de los caninoskis</h1>
      {isLoading ? <p>Estamo mostrando perritos</p> : error ? <h1>Hay un error</h1> :
      <div className='caja'>
        <img src={data.message} alt='foto de un canino' />
        {isLoading && <button onClick={changeImage}>Cambiar de perrito</button>}
      </div>
      
      }
    </>
  )
}

export default App
