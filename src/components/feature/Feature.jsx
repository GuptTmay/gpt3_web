import React from 'react'
import './feature.css';     

const Feature = ({ heading, para }) => {
  return (
    <div className='gpt3__feature'>
      <div className='gpt3__feature-heading'>
        <div />
        <div>{heading}</div>
      </div>
      <div className='gpt3__feature-text'>
        <p>{para}</p>      
      </div>
    </div>
  )
}

export default Feature
