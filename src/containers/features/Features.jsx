import React from 'react'
import './features.css'
import { Feature } from '../../components';

const Features = () => {
  return (
    <div className="gpt3__featuresSection section__padding" id='features'>
      <div className='gpt3__featuresSection-heading'>
        <div className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</div>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt3__featuresSection-features'>
        <Feature heading='Improving end distrusts instantly' para='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'/>
        <Feature heading='Become the tended active' para='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'/>
        <Feature heading='Message or am nothing' para='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'/>
        <Feature heading='Really boy law county' para='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'/>
      </div>
    </div>
  )
}

export default Features