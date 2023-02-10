import React from 'react';
import './ContactBar.css';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon  from "@mui/icons-material/LinkedIn";
import InstagramIcon  from "@mui/icons-material/Instagram";
import TwitterIcon  from "@mui/icons-material/Twitter";




const ContactBar = () => {
  return (
    <div className='contact_bar_wrapper'>
    <div className='contact_bar'>
    <a href="https://www.linkedin.com/in/s-sanjay-dharsan-536b6521b" className='contact_bar_icon' target='_blank'><LinkedInIcon /></a>
    <a href="https://github.com/sanjaydharsans" className='contact_bar_icon' target='_blank'><GitHubIcon /></a>
    <a href="https://instagram.com/sanjaydharsans?igshid=ZDdkNTZiNTM=" className='contact_bar_icon' target='_blank'><InstagramIcon /></a>
    <a href="" className='contact_bar_icon' target='_blank'><TwitterIcon /></a>
    <div className='contact_bar_line'></div>
    </div>
    <div className='contact_bar'>
    <a href='mailto:sanjaydharsans@gmail.com' className='contact_bar_email'>sanjaydharsans@gmail.com</a>
    <div className='contact_bar_line'></div>
    </div>
    </div>
  )
}

export default ContactBar
