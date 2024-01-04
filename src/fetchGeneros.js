const fetchGeneros = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTg0M2JjNDk5NDQ4OTAyNmQ2MDk5Yzg1NTJjYjNkNiIsInN1YiI6IjY1N2JkYjQ3NjNlNmZiMDEwMGM2YWM5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DgQqwntqnrbyolcpjD0J4ujcQKULU9rhzHdXJZF6mRk'
        }
      };
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
      
  try {
    const respuesta = await fetch(url, options);
    const datos = await respuesta.json();
    return datos.genres 
  }
  catch (error) {
    console.log(error)

  }
}


export default fetchGeneros;