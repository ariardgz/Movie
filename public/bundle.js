'use strict';

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
    console.log(error);

  }
};

const obtenerGenero = (id, generos) => {
    let nombre;

    generos.forEach((elemento)=>{
        if (id === elemento.id){
           nombre = elemento.name;

        }
       
    });

    return nombre;

};

const fetchPopulares = async() => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTg0M2JjNDk5NDQ4OTAyNmQ2MDk5Yzg1NTJjYjNkNiIsInN1YiI6IjY1N2JkYjQ3NjNlNmZiMDEwMGM2YWM5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DgQqwntqnrbyolcpjD0J4ujcQKULU9rhzHdXJZF6mRk'
    }
  };
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

  try {
    const respuesta = await fetch(url, options);
    const datos = await respuesta.json();
    const resultados = datos.results;

    const generos = await fetchGeneros();
    

    resultados.forEach((resultado)=>{
      resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
    });

    return resultados;
  }
  catch (error) {
    console.log(error);

  }
  
   
};

const cargarTitulos = (resultados) => {
    const contenedor = document.querySelector('#populares .main__grid');


    
    resultados.forEach((resultado) => {
        
        const plantilla = `
        <div class="main__media">
			<a href="#" class="main__media-thumb">
				<img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />
					</a>
					<p class="main__media-titulo">${resultado.title}</p>
					<p class="main__media-fecha">${resultado.genero}</p>
		</div>
    `;
    contenedor.insertAdjacentHTML('beforeend', plantilla);
    });

};

const contenedorGeneros = document.getElementById('filtro-generos');
const cargarGeneros = async() => {
    const generos = await fetchGeneros();
    generos.forEach((genero) =>{
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = genero.name;
        btn.setAttribute('data-id', genero.id);

        contenedorGeneros.appendChild(btn);

    });


};

const cargar = async() =>{
    const resultados = await fetchPopulares();
    cargarTitulos(resultados);
    cargarGeneros();
    
};
cargar();
//# sourceMappingURL=bundle.js.map
