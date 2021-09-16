import React, {Component} from 'react';
import Search from './Search/Search';
import "./Header.css"

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
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

    render(){
        return (  
                <header>
                    <h1 className="Titulo">MOVIES</h1>
                    <section className="infoHeader">
                           
                            <div className="iconos">
                                <i className="fas fa-th orden" onClick="nuevaClase(this)" value="Create"></i>
                                {/* <i className="fas fa-align-justify orden"></i> */}
                                <form onSubmit={this.enviarSubmit}>
        <label>Filter cards: </label>
        <input type="text" name="name" onChange={(e) => this.controlCambios(e)} value={this.state.filterBy}/>
        <button type= "submit"><i className="fas fa-align-justify orden"></i></button>
        </form>
                            </div>
        
        
      
                            <Search /> {/* que hago con este search */}
                    </section>
                </header>
        )
    }
}

export default Header;