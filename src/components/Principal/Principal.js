import React, {Component} from 'react';
import "./Principal.css"
import Article from './Article/Article';

class Principal extends Component {
    constructor(){
      super();
      this.state = {
        peliculas: [],
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
    render(){
      return(
        <main>
            <button className="cargarMas" type="button" onClick={() => this.cargarMas()}>Cargar más tarjetas</button>
            <div class="card-container">
              {this.state.peliculas.map((pelicula =>(
            <Article
            key={pelicula.id} 
            datosPelicula={pelicula} />
              )
          ))}
            </div>
        </main>
    );
    }
}

export default Principal;
