import React from 'react'
import '../hero/hero.css'

const Hero = () => {
  return (
    <div className='hero-wrapper'>
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Starts at ₦2,500. Cancel anytime.</h3>
        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
        <div className='cta-wrapper'>
            <input type="text" placeholder='Email address' />
            <button>Get Started <span>▶</span></button>
        </div>
      
    </div>
  )
}

export default Hero
