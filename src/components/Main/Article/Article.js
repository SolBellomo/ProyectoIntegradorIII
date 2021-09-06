import React, {Component} from 'react';

class Head extends Component {
    constructor(props){
      super(props);
      this.state = {valor: ''};
    }
    render(){
      return(
        <article className="tarjeta">
            <section class="navigation">
                <i classname="delete" class="far fa-window-close"></i>
            </section>
            <main className="infoTarjeta">
                <div className="fotosCont">

                <img src="/img/image-default.png" alt="" className="foto" />

                </div>
                
                <h3>Título/ Nombre</h3>
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

export default Head;
