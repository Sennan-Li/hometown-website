import React from 'react'
import Jumbotron from '../components/jumbotron';
import History from '../components/history'
import Geography from '../components/geography';



//images



export default function Hometown(props) {
  return (
      <section onClick={props.onDropdownClose}>
        <Jumbotron />
        <Geography/>
        <History/>
      </section>
  )
}
