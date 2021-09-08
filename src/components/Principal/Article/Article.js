import React, {Component} from 'react';
import Principal from '../Principal';

class Article extends Component {
    constructor(props){
      super(props);
      this.state = { valor: ""};
    }



       
        

    render(){
      return(
          
        <article className="tarjeta">
            <section class="navigation">
                <i classname="delete" class="far fa-window-close"></i>
            </section>
            <main className="infoTarjeta">
                <div className="fotosCont">

                <img src alt="" className="foto" />

                </div>
               <main/>
                
                <h3>titulo</h3>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <section class="aditional-info">
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    
                </section>
                <a href="">Ver más</a>
                
            </main>
        </article>
    );
    }
}

export default Article;
