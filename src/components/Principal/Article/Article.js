import React, {Component} from 'react';
import Principal from '../Principal';
import './Article.css'

class Article extends Component {
    constructor(props){
      super(props);
      this.state = {
          viewMore: false,
          text: "Ver más",
        };
    }
    render(){
        const{poster_path, original_title, overview, release_date, popularity} = this.props.datosPelicula;
        return(
        <article className="tarjeta">
            <section className="navigation">
                <i classname="delete" className="far fa-window-close"></i>
            </section>
               <main className="infoTarjeta">
                    <div className="fotosCont">
                        <img src={'https:///image.tmdb.org/t/p/w500' + poster_path} alt={original_title} className="foto" />
                    </div>
                    <h3>{original_title}</h3>
                    <p className="description">{overview}</p>
                    <section className="aditional-info">
                        <h3>Release date: {release_date}</h3>
                        <h3>Popularity: {popularity}</h3>
                    </section>
                    <a href="">Ver más</a>
               <main/>
            </main>
        </article>
    );
    }
}

export default Article;
