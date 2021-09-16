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

    /* display(){
        if(this.state.display){
            this.setState({
                display: flase,
            })
        }else{
            this.setState({
                display: true,
            })

        }
    } */
    /* borrarPelicula(id){
        console.log(id);
        const otras = this.state.pelicula.filter(
        (pelicula) => pelicula.id != id);
        this.setState({
        pelicula: otras,
              })
            }
 */
    render(){
        const{poster_path, original_title, overview, release_date, popularity, id} = this.props.datosPelicula;

    
        return(
           
        <article className="tarjeta">
            {/* <section className="Header"> 
                        <h3 className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}></h3>
                        <h3 className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}></h3>
            </section> */}
            <section className="navigation">
                {/* <i classname="delete" className="far fa-window-close"></i> */}
                <button onClick={()=> this.props.borrar(id)} className="botonBorrar"> <i classname="delete" className="fas fa-times cruz"></i> </button>
                
            </section>
               <main className="infoTarjeta">
                    <div className="fotosCont">
                        <img src={'https:///image.tmdb.org/t/p/w500' + poster_path} alt={original_title} className="foto" />
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
