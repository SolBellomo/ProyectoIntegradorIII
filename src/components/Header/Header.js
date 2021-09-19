import React, {Component} from 'react';
import Article from '../Main/Article/Article';
import "./Header.css"

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor: "",
            filterBy: "",
            
          };
    }
    enviarSubmit(e) {
        e.preventDefault();
    }
  
    controlCambios(e) {
      this.setState(
        {
          filterBy: e.target.value,
        },
        () => this.props.filtrarPeliculas(this.state.filterBy)
      );
    }
    displayColumnas(){
      this.setState({
        filas: false
      })
    }

    displayFilas(){
      this.setState({
        filas: true
      })
    }

    render(){
        return (  
                <header>
                    <h1 className="Titulo">MOVIES</h1>
                    <section className="infoHeader">
                            <div className="iconos">
                            <i className="fas fa-th orden" onClick={()=>this.displayFilas()}></i>
                            <i className="fas fa-align-justify orden" onClick={()=>this.displayColumnas()}></i>
                              <div className={this.state.filas ? 'filas' : 'columnas'}> 
                              
                               </div>
        
                            </div>
                            <form onSubmit={(event) => this.evitarSubmit(event)}>
                                <input type="Search" className="busqueda" name="name" onChange={(e) => this.controlCambios(e)} value={this.state.filterBy} placeholder="Filter cards..."/>
                                <button type="submit" className="icon"><i className="fas fa-search search" value="Submit"></i></button>
                            </form>
                    </section>
                   
                </header>
        )
    }
}

export default Header;