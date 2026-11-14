import React from 'react'
import Header from './components/header/Header.jsx'
import './App.css'
import ReasonBoxes from './components/hero/ReasonBoxes.jsx'
import Faq from './components/hero/Faq.jsx'



function App() {
  
  return (
    <main className='body'>
      <Header/>
      <ReasonBoxes/>
      <Faq/>
      {/* <Footer/> */}

    </main>
  )
}

export default App
