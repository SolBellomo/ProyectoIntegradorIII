import React, {Component} from 'react';
import './App.css';
import Head from './components/Head/Head'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends Component {
  /*constructor (props){
    super(props);
    this.state = {
      filterField: false, 
    };
  }
  filterTrigger(){
    if(this.state.filterField === false){
      this.setState({filterField: true})
    }
    else {
      this.setState({filterField:false})
    }
  }*/
  render() {
    return (
      <div className="App">
        <React.Fragment >
          <Head />
          <Header />
          <Main />
        </React.Fragment>
        <Footer /> 
      </div>
    );
  }  
}

export default App;
