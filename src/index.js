import fetchPopulares from "./fetchPopulares"
import cargarTitulos from "./cargarTitulos";
import cargarGeneros from "./cargarGeneros";
import './listenerFiltro';

const cargar = async() =>{
    const resultados = await fetchPopulares();
    cargarTitulos(resultados);
    cargarGeneros('movie')
    
}
cargar();

