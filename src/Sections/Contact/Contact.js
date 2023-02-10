import React from 'react';
import './Contact.css'

const contact = () => {
  return (
    <section id='contact' className='contact_section'>
    <div className='heading_1'></div>
    <h1 className='heading_2'>Get in touch</h1>
    
    <p className='contact_desc'></p>
    <a href='mailto:sanjaydharsans@gmail.com'>
    <button className='contact_btn'>Say Hello</button>
    </a>
    </section>
  )
}

export default contact
