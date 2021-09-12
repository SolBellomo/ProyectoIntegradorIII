import './App.css';
import React from 'react';
import Head from './components/Head/Head'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import FilterField from './components/FilterField';

function App() {
  return (
    <>
      <div className="App">
        <Head />
        <Header />
        <Main />
      </div>
      <Footer /> 
    </>
  );
}

export default App;
