import React from 'react'
import '../hero/movie.css'

const Movie = () => {
    const imgData = [
        {
            img: "/the_convenant.png",
            no: "1"
        },
          {
            img: "/oversabi_aunty.png",
            no: "2"
        },
          {
            img: "/lupin.png",
            no: "3"
        },
          {
            img: "/black _doves.png",
            no: "4"
        },
          {
            img: "/beauty_in_black.png",
            no: "5"
        },
          {
            img: "/ordinary_people.png",
            no: "6"
        },
          {
            img: "/dead_end_ job.png",
            no: "7"
        },
          {
            img: "/the_paradise.png",
            no: "8"
        },
          {
            img: "/a_different_world.png",
            no: "9"
        },
          {
            img: "/alpha.png",
            no: "10"
        },
    ]
  return (
    <div className='movie-container'>
      <div className='movie-wrapper'>
        <h1>Trending Now</h1>
        <div className='img-container'>
            {imgData.map((imgs, index)=>(
                <div className='img-box-wrapper'key={index}>
                <img src={imgs.img} alt="images" />
                <section>{imgs.no}</section>
            </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}

export default Movie
