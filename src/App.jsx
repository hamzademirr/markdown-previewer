import React from 'react'
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";
import Footer from './components/Footer';

import './App.css'

function App() {

  return (
    <>
      <h1>Markdown Previwer</h1>
      <div className='text-view'>
        <InputArea />
        <OutputArea />
      </div>
      <Footer />
    </>
  )
}

export default App
