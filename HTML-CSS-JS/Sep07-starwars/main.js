
const url = 'https://swapi.dev/api/';

document.addEventListener('DOMContentLoaded', () =>{
    cargarContenido();
});

const section = document.getElementById('section')

async function cargarContenido(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const planetsURL = data.planets;
        const getPlanets = await fetch(planetsURL);
        const dataPlanets = await getPlanets.json();
        console.log(dataPlanets.results);
        const planets = dataPlanets.results;
        planets.forEach(planet => {
            section.innerHTML += `
            <div class="cards">
                <h2>${planet.name}</h2>
                <p>${planet.climate} </p>
                <p>${planet.terrain} </p>
                <p>${planet.populartion} </p>
            </div>
            `
        });
    } catch (error) {
        console.log(error)
    }
}