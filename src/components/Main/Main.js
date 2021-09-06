import React, {Component} from 'react';
import Article from './Article/Article'

class Main extends Component {
    constructor(props){
      super(props);
      this.state = {valor: ''};
    }
    render(){
      return(
        <main>
            <button type="button">Cargar más tarjetas</button>
            <section class="card-container">
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </section>
        </main>
    );
    }
}

export default Main;
