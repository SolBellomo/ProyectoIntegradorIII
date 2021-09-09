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
                <header>
                    <h1 className="Titulo">MOVIES</h1>
                    <section className="infoHeader">
                            <p>Ordenar ASC/ DESC</p>
                            <div className="iconos">
                                <i className="fas fa-th orden"></i>
                                <i className="fas fa-align-justify orden"></i>
                            </div>
                            
                            <form onSubmit={(event) => this.evitarSubmit(event)}>
                                <label className="label">Name:</label>
                                <input type="Search" className="busqueda" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} placeholder="Search..."/>
                            <button type="submit" className="icon"><i className="fas fa-search search" value="Submit"></i></button>
                            </form>
                    </section>
                </header>
        )
    }
}


export default Header;