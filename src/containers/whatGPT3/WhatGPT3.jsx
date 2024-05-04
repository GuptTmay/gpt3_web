import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (

    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-intro">
        <Feature heading='What is GPT-3' para='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature heading='Chatbots' para='We so opinion friends me message as delight. Whole front do of plate heard oh ought. ' />
        <Feature heading='Knowledgebase' para='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
        <Feature heading='Education' para='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
      </div>
    </div>

  )
}

export default WhatGPT3