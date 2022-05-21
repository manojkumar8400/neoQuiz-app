import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer-container ptb-4'>
      <h2 className='f-color'>made by Manoj Kumar </h2>
      <section className='flex jstfy-ctnt-center gap-2 mtb-8'>
        <a href="https://github.com/manojkumar8400" rel="noreferrer" target="_blank">
          <img className='img' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/manoj-kumar-340471219/" rel="noreferrer" target="_blank">
          <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ekJEwQipcpLR9NgNk9tQe91Pd8Mxqf2EEw&usqp=CAU" alt="linkedin" />
        </a>
        <a href="https://twitter.com/home" rel="noreferrer" target="_blank">
          <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ_0jd9NXPlIIheboIfzemVC6U8rL2rGxcQ&usqp=CAU" alt="twitter" />
        </a>
      </section>
    </footer>
  )
}

export { Footer }
