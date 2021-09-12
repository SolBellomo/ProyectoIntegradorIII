import React, {Component} from 'react';
import "./Main.css"
import Article from './Article/Article';
import FilterField from '../FilterField';

class Main extends Component {
    constructor(){
      super();
      this.state = {
        peliculas: [],
        cargando: false,
    };
    }
    componentDidMount(){
      console.log("component did mount");
      const url= "https://api.themoviedb.org/3/movie/popular?api_key=10fd46606b7b4f788c4f94213141cfc9&language=en-US&page=1"
      fetch(url)
      .then( (respuesta) => respuesta.json())
              .then((data) =>{
                  const limit = 10;

                  console.log(data);
                  this.setState ({
                      peliculas: data.results.slice(0, limit),
                      cargando: true,
                  });
              })
              .catch( err => console.log(err))
        }
    
    componentDidUpdate(){
      console.log("component did update")
    }
    cargarMas(){
      const url = 'https://api.themoviedb.org/3/movie/popular?api_key=c6008cb55dc77f123f073cb070c2193b&language=en-US&page=' + this.state.agregar + 1; 

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    agregar:data.page, 
                })
            })
            .catch( error => console.log(error))
          }
    borrarPelicula(id){
        console.log(id);
        const otras = this.state.pelicula.filter(
        (pelicula) => pelicula.id != id);
        this.setState({
        pelicula: otras,
              })
            }

    filtrarPeliculas(textoFiltrar){
      let PeliculasFiltradas = this.state.peliculas.filter((pelicula) => pelicula.title.toLowerCase().includes(textoFiltrar.toLowerCase()));
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
                < FilterField filtrarPeliculas={(param) => this.filtrarPeliculas (param)}/>
            </div>
            <div class="card-container">
              { 
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
