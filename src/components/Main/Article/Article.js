import React, {Component} from 'react';
import './Article.css'

class Article extends Component {
    constructor(props){
      super(props);
      this.state = {
          viewMore: false,
          text: "Ver más",
          peliculas: [],
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
        const{poster_path, original_title, overview, release_date, popularity, id} = this.props.datosPelicula;

    
        return(
            <>
            {this.props.changeOrder === false ?
        <article className="tarjeta">
            <section className="navigation">
                <button onClick={()=> this.props.borrar(id)} className="botonBorrar"> <i classname="delete" className="fas fa-times cruz"></i> </button>
                
            </section>

                    <div className="fotosCont">
                        <img src={'https:///image.tmdb.org/t/p/w500' + poster_path} alt={original_title} className="foto" />
                    </div>
               <main className="infoTarjeta">
                   
                    <h3 className="tituloTarjeta">{original_title}</h3>
                    
                    <section className="aditional-info"> 
                        <h3 className={`aditional ${this.state.viewMore ? 'show' : 'hide'}`}>{overview}</h3>
                        <h3 className={`aditional ${this.state.viewMore ? 'show' : 'hide'}`}>Release date: {release_date}</h3>
                        <h3 className={`aditional ${this.state.viewMore ? 'show' : 'hide'}`}>Popularity: {popularity}</h3>
                    </section>
                    
                    <p className='more' onClick={()=>this.viewMore()}>{this.state.text}</p>
               <main/>
            </main>
        </article>
        :
        <article className="tarjeta2">
        <section className="navigation2">
            <button onClick={()=> this.props.borrar(id)} className="botonBorrar"> <i classname="delete" className="fas fa-times cruz"></i> </button>
            
        </section>

                <div className="fotosCont2">
                    <img src={'https:///image.tmdb.org/t/p/w500' + poster_path} alt={original_title} className="foto" />
                </div>
           <main className="infoTarjeta2">
               
                <h3 className="tituloTarjeta2">{original_title}</h3>
                
                <section className="aditional-info"> 
                    <h3 className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>{overview}</h3>
                    <h3 className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Release date: {release_date}</h3>
                    <h3 className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Popularity: {popularity}</h3>
                </section>
                
                <p className='more2' onClick={()=>this.viewMore()}>{this.state.text}</p>

           <main/>
        </main>
    </article> }
 </>
    );
    }
}

export default Article;
