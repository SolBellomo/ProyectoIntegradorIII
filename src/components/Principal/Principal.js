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
                  const limit = 8;

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

    render(){
      return(
        <main>
            <button className="cargarMas" type="button">Cargar más tarjetas</button>
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
