import React from 'react'

import { Footer, Blog, Features, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <div class="App">
      <div class="gradient">
        <Navbar />
        <Header />
      </div>

      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App