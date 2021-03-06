import logo from './logo.svg';
import './App.css';
//import React from 'react';
import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import resumeData from './components/resumeData';

class App extends Component  {
  render() {
  return (
  <div className="App">
  <Header resumeData={resumeData}/>
  <About resumeData={resumeData}/>
  <Resume resumeData={resumeData}/>
  <Footer resumeData={resumeData}/>
  </div>
  );
  }
  }
  export default App;