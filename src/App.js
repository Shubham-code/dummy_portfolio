import React from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Services from "./components/Services";
import About from "./components/About";
import './App.css';

const App=()=>{
  return(
    <React.Fragment>
    <div>
      < Banner />
      <Nav />
      <Services />
      <About />
    </div>
    
    </React.Fragment>
  );
};

export default App;
