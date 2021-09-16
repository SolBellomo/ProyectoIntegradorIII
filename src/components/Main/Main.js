import React, {Component} from 'react';
import "./Main.css"
import Article from './Article/Article';
import Search from '../Header/Search/Search';

class Main extends Component {
    constructor(){
      super();
      this.state = {
        originales: [],
        peliculas: [],
        cargando: false,
        paginado: 1,
    };
    }
    componentDidMount(){
      console.log("component did mount");
      const url= `https://api.themoviedb.org/3/movie/popular?api_key=10fd46606b7b4f788c4f94213141cfc9&language=en-US&page=${this.state.paginado}`
      fetch(url)
      .then( (respuesta) => respuesta.json())
              .then((data) =>{
                  const limit = 10;

                  console.log(data);
                  this.setState ({
                      originales: data.results.slice(0, limit),
                      peliculas: data.results.slice(0, limit),
                      cargando: true,
                      paginado: this.state.paginado + 1,
                  });
              })
              .catch( err => console.log(err))
        }
    
    componentDidUpdate(){
      console.log("component did update")
    }
    cargarMas(){
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=10fd46606b7b4f788c4f94213141cfc9&language=en-US&page=${this.state.paginado}`;
        console.log(url)
        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    originales: this.state.originales.concat(data.results),
                    paginado: this.state.paginado + 1,
                })
            })
            .catch( error => console.log(error))
          }
    borrarPelicula(id){
        console.log(id);
        const otras = this.state.peliculas.filter(
        (pelicula) => pelicula.id !== id);
        const otrasOriginales = this.state.originales.filter (
          (pelicula) => pelicula.id !== id);

        this.setState({
          peliculas: otras,
          originales: otrasOriginales,
        }) 
    } 

    filtrarPeliculas(textoFiltrar){
      let PeliculasFiltradas = this.state.originales.filter((pelicula) => pelicula.title.toLowerCase().includes(textoFiltrar.toLowerCase()));
      console.log(PeliculasFiltradas);

      this.setState({
        peliculas: PeliculasFiltradas,
      })
    }        

    render(){
      return(
        <main>
            <div className="button">
                <button className="cargarMas" type="button" onClick={() => this.cargarMas()}>Cargar más tarjetas</button>
                < Search filtrarPeliculas={(param) => this.filtrarPeliculas (param)}/>
            </div>
            
            <div className="card-container">
            { this.state.peliculas.length && this.state.filtrarPeliculas === 0 ? 
              <p>No se encuentran resultados</p>:
                this.state.cargando === false ?
                  <img src="https://i.pinimg.com/originals/42/a8/d4/42a8d4625aeb088c45eba5a84ca36325.gif" alt="Cargando..." />:
                this.state.peliculas.map((pelicula =>(
                    <Article
                    key={pelicula.id} 
                    datosPelicula={pelicula} 
                    borrar={ (peliculaBorrar) =>this.borrarPelicula(peliculaBorrar)}/> 
                )))
                }
            </div>
        </main>
    );
    }
}

export default Main;