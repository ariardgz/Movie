import fetchPopulares from "./fetchPopulares"
import cargarTitulos from "./cargarTitulos";
import cargarGeneros from "./cargarGeneros";
import './listenerFiltro';
import './listenerFiltroGeneros'
import './listenerBurcar'
import './paginacion'
import './listenerItems'
import './listenerPopup'

const cargar = async() =>{
    const resultados = await fetchPopulares();
    cargarTitulos(resultados);
    cargarGeneros('movie');
    
    
}
cargar();

