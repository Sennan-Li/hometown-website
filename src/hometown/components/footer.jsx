import React from 'react'

//images
import info from '../images/geography.png'
import guide from '../images/guide.png'
import map from '../images/train.png'

export default function Footer() {
  return (
    <section className='end'>
        <div className='moreInfo'>
            <div className='icons'>
                <a href='/hometown' className='guide'><img src={info} alt=""/><p>Overview</p></a>
                <a href='/hometown/guide' className='guide'><img src={guide} alt=""/><p>Guide</p></a>
                <a href='/hometown/transportation' className='transport'><img src={map} alt=""/><p>Transportation</p></a>
            </div>
        </div>
        <hr />
        <p>2023 Sennan Li 李森楠</p>

    </section>
  )
}
