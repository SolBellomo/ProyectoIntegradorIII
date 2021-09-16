import React, {Component} from 'react';
import Search from './Search/Search';
import "./Header.css"

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (  
                <header>
                    <h1 className="Titulo">MOVIES</h1>
                    <section className="infoHeader">
                           
                            <div className="iconos">
                                <i className="fas fa-th orden" onClick="nuevaClase(this)" value="Create"></i>
                                <i className="fas fa-align-justify orden"></i>
                            </div>
                            <Search />
                    </section>
                </header>
        )
    }
}

export default Header;