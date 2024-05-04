import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer' id='footer'>
      <div className='gpt3__footer-join section__padding'>
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        <div>Request Early Access</div>
      </div>

      <div className="gpt3__footer-content section__padding">
        <div className="gpt3__footer-content_brand">
          <img src={logo} alt='brand' />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-content_menu">
          <div className="gpt3__footer-content_menu-links">
            <p>Links</p>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counter</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-content_menu-links">
            <p>Company</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contract</p>
          </div>
          <div className="gpt3__footer-content_menu-links">
            <p>Get in touch</p>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>
      <div className='gpt3__footer-rights'>
        <p>© 2024 GPT-3. All rights reserved.</p>
      </div> 
    </div>
  )
}

export default Footer