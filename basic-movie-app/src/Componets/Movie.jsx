import React from 'react'
import '../App.css'
const Movie = ({Title,Year,Runtime,Poster}) => {
  return (
    <div className='s'>
      <img src={Poster} alt="" />
      <p>{Title}</p>
      <p>{Runtime}</p>
      <p>{Year}</p>
    </div>
  )
}

export default Movie
