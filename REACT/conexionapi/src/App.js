import { useEffect, useState } from 'react'
import "./App.css"




const App = () => {

  const [isLoading, setIsLoading] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        try {
          const response = await fetch("https://dog.ceo/api/breeds/image/random")

          if (response.ok) {
            const dog = await response.json()
            setImageUrl(dog.message)
            setError(null)
            setIsLoading(false)
          }
          else {
            setError("no hay perrito")
          }

        } catch (error) {
          setError("No hay Posibilidad de hacer la solicitud")
        }
      }
      fetchData()
    }
  }, [isLoading])

  const randomDog = ()=>{
    setIsLoading(true)
  }
  if (isLoading) {
    return(
      <div className='App'>
        <h1>Cargando...</h1>
      </div>
    )
  }
  if (error) {
    return(
      <div>
        <h1>{error}</h1>
        <button onClick={randomDog}>try again</button>
      </div>
    )
  }

  return(
    <div className='App'>
      <img src={imageUrl} alt="imagen de perrito aleatoria"></img>
      <button onClick={randomDog}>tener mas perritos</button>
    </div>
  )
}


export default App