import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css'
import { FaArrowRight } from "react-icons/fa";

const Header = () => {

  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className='gradient__text' style={{ whiteSpace: 'nowrap' }}>
          Let&apos;s Build Something <br />
          amazing with GPT-3 <br />
          OpenAI <br />
        </h1>

        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className="gpt3__header-content_input">
          <input type="email" placeholder='Your Email Address' />
          <button className='gpt3__header-content_input_btn' type='button'>Get Started</button>
          <button className='gpt3__header-content_input_mobile-btn' type='button'><FaArrowRight /></button>
        </div>

        <div className='gpt3__header-content_people'>
          <img src={people} alt="people" draggable="false"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image"> 
        <img src={ai} alt="ai" draggable="false" />
      </div>
    </div>
  )
}

export default Header