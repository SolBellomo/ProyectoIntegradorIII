import './App.css';
import React from 'react';
import Head from './components/Head/Head'
import Header from './components/Header/Header';
import Principal from './components/Principal/Principal';
import Footer from './components/Footer/Footer';
import FilterField from './components/FilterField';

function App() {
  return (
    <>
      <div className="App">
      <Head />
      <Header />
      <Principal />
      <FilterField />
      <Footer /> 
      </div>
    </>
  );
}

export default App;
