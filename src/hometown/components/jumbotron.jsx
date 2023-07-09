import React from 'react'


//images
import jumbotron from '../images/shenzhen jumbotron video.mp4'

export default function Jumbotron() {
  return (
    <section className='jumbotron'>
      <video autoPlay muted playsInline>
        <source src={jumbotron} type='video/mp4'/>
      </video>

      <div className='intro'>
        <h2>Shenzhen</h2>
        <h2>深圳</h2>
      </div>
      <div className='ad'><p>One visit is never enough.</p></div>
    </section>
  )
}