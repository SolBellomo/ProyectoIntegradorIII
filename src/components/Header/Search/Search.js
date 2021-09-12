import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            valor: "",
            filterBy: "",
        }
    }
    evitarSubmit(event){
        event.preventDefault();
    }
    controlarCambios(event){
        this.serState({valor: event.target.value});
    }
    enviarSubmit(e) {
        e.preventDefault();
    }
    
    controlCambios(e) {
        this.setState({
            filterBy: e.target.value,
        },
        () => this.props.filtrarPeliculas(this.state.filterBy)
        );
    }
    render(){
        return (  
            <form onSubmit={(event) => this.evitarSubmit(event)}>
                <input type="Search" className="busqueda" onChange={(e) => this.controlCambios(e)} value={this.state.filterBy} placeholder="Search..."/>
                <button type="submit" className="icon"><i className="fas fa-search search" value="Submit"></i></button>
            </form>
            
        )
    }
}

export default Search;

