import React from 'react'
import '../header/header.css'
import Hero from '../hero/Hero.jsx'
import Movie from '../hero/Movie.jsx'

const Header = () => {
  return (
    <main className='header-container'>
      <div className='header-wrapper'>
      <header>
        <a href="/" className='netflix-logo'><img src="/Netflix_Logo_2.png" alt="netflix logo" /></a>
      </header>
      <button className='signin-btn'>Sign In</button>
      </div>

      <div className='hero-container'>
         <Hero/>
         <Movie/>
      </div>
      
    </main>
  )
}

export default Header
