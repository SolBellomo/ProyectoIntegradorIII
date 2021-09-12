import React, {Component} from 'react';
import './Article.css'

class Article extends Component {
    constructor(props){
      super(props);
      this.state = {
          viewMore: false,
          text: "Ver más",
        };
    }
    viewMore(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text: 'Ver más'
            })
        } else {
            this.setState({
                viewMore: true,
                text: 'ver menos'
            })            
        }
    }

    render(){
        const{poster_path, original_title, overview, release_date, popularity} = this.props.datosPelicula;
        let contenido;

        if (poster_path == "" ) {
            contenido = <p> Cargando...</p>
        } else {
            contenido =  <img src={'https:///image.tmdb.org/t/p/w500' + poster_path} alt={original_title} className="foto" />
        }

        return(
        <article className="tarjeta">
            <section className="navigation">
                <i classname="delete" className="far fa-window-close"></i>
            </section>
               <main className="infoTarjeta">
                    <div className="fotosCont">
                        {contenido}
                    </div>
                    <h3 className="tituloTarjeta">{original_title}</h3>
                    
                    <section className="aditional-info"> 
                        <h3 className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>{overview}</h3>
                        <h3 className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Release date: {release_date}</h3>
                        <h3 className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Popularity: {popularity}</h3>
                    </section>
                    
                    <p className='more' onClick={()=>this.viewMore()}>{this.state.text}</p>

               <main/>
            </main>
        </article>
    );
    }
}

export default Article;
