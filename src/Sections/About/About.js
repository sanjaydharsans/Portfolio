import React from 'react';
import './About.css';
import Heading from '../../Components/Heading/Heading';
import pic from './san.JPG';

const About = () => {
  return (
    <section id='about'>
    <Heading index="01" heading="About Me" />
    <div className='about_container'>
    <div className='about_left'>
    <p className='about_desc'>
    Hello! My name is Sanjay Dharsan.
    </p>
    <p>
    Currently, I am pursuing a BTech in computer science from a lovely professional university. I like to create and design web pages. loves to learn new technologies related to front-end design.
    </p>
    
    </div>
    <div className='about_right'>
    <img src={pic} alt='profile_pic' className='about_profile_img' />
    <div className='about_img_border' />
    </div>
    </div>

   
    </section>
  )
}

export default About
