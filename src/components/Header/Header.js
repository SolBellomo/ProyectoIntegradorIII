import React, {Component} from 'react';
import "./Header.css"

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {valor: ''};
    }
    evitarSubmit(event){
        event.preventDefault();
    }
    controlarCambios(event){
        this.serState({valor: event.target.value});
    }
    render(){
        return (
            <>   
                <header>
                    <h1 className="Titulo">Título/ Nombre de la app</h1>
                    <section className="infoHeader">
                      
                             <p>Ordenar ASC/ DESC</p>
                            <i className="fas fa-th"></i>
                            <i className="fas fa-align-justify"></i>
                            
                            <form onSubmit={(event) => this.evitarSubmit(event)}>
                                <label>Name:    </label>
                                <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor}/>
                            <button type="submit"><i className="fas fa-search" value="Submit"></i></button>
                            </form>
                    </section>
                </header>
            </>
        )
    }
}


export default Header;