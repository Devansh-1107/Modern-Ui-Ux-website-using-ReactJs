import React from 'react'  //rafce(react functional component)
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Navbar, Brand, CTA } from './components';
import'./App.css';

const App = () => {
  return (
    <div className="App">
      <div className='gradiant__bg'>
        <Navbar />
        <Header />          
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
