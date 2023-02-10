import React from 'react';
import './Home.css'

const Home = () => {
  return (
   
      <section id='home' className="home_section">
       <p className="home_greet">
       Hii,my name is
       </p>
       <h1 className="home_heading_1">
       S Sanjay Dharsan
       </h1>
       <h1 className="home_heading_2">
       I design & build Web Pages.
       </h1>

       <p className="home_desc">
       A passionate full-stack web developer likes to build web applications with HTML, CSS, JavaScript, and React.js.
       
       </p>
       <a href="#work">
       <button className="home_btn">Check out my work!</button>
       </a>

      </section>
    
  )
}

export default Home
