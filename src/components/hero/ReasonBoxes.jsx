import React from 'react'
import '../hero/ReasonBoxes.css'

const ReasonBoxes = () => {
    const reasonBoxes =[
        {
            title: "Enjoy on your TV",
            subtitle: `Watch on Smart TVs,
             Playstation, Xbox,
            Chromecast, Apple TV, Blu-
            ray players, and more.`,
            icon: "🖥"
        },
            {
            title: "Download your shows to watch offline",
            subtitle: `Save your favorites easily and always have something to watch.`,
            icon: "🖥"
        },
            {
            title: "Watch everywhere",
            subtitle: `Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.`,
            icon: "🖥"
        },
            {
            title: "Create profiles for kids",
            subtitle: `Send kids on adventures with their favorite characters in a space made just for them — free with your membership.`,
            icon: "🖥"
        },
    ]
  return (
    <div className='Reason-Boxes-container'>
      <div className='Reason-Boxes-wrapper'>
        <h1>More Reasons to Join</h1>
        <div className='ReasonsBoxes-wrapper'>
            {reasonBoxes.map((box, index)=>(
             
             <div className='Reason-box-holder' key={index}>
                <h2>{box.title}</h2>
                <h3>{box.subtitle}</h3>

                <span>{box.icon}</span>
            </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}

export default ReasonBoxes
