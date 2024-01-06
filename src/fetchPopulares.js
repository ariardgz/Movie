import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

const fetchPopulares = async (filtro = 'movie') => {
  const tipo = filtro === 'movie'?'movie' : 'tv'
 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTg0M2JjNDk5NDQ4OTAyNmQ2MDk5Yzg1NTJjYjNkNiIsInN1YiI6IjY1N2JkYjQ3NjNlNmZiMDEwMGM2YWM5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DgQqwntqnrbyolcpjD0J4ujcQKULU9rhzHdXJZF6mRk'
    }
  };
  
  const url = `https://api.themoviedb.org/3/${tipo}/popular?language=en-US&page=1`

  try {
    const respuesta = await fetch(url, options);
    const datos = await respuesta.json();
    const resultados = datos.results

    const generos = await fetchGeneros();
    resultados.forEach((resultado)=>{
      resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
    });

    return resultados;
  }
  catch (error) {
    console.log(error)

  }
  
   

}
export default fetchPopulares;