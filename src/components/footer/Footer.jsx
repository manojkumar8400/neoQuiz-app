import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer-container ptb-4'>
      <h2 className='f-color'>made by Manoj Kumar </h2>
      <section className='flex jstfy-ctnt-center gap-2 mtb-8'>
        <a href="https://github.com/manojkumar8400" rel="noreferrer" target="_blank">
        <i class="fa fa-github logo"></i>
        </a>
        <a href="https://www.linkedin.com/in/manoj-kumar-340471219/" rel="noreferrer" target="_blank">
        <i class="fa fa-linkedin logo"></i>
        </a>
        <a href="https://twitter.com/home" rel="noreferrer" target="_blank">
           <i class="fa fa-twitter logo"></i>
        </a>
      </section>
    </footer>
  )
}

export { Footer }
