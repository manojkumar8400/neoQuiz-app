import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer-container ptb-4'>
      <h2>made by Manoj Kumar </h2>
      <section className='flex jstfy-ctnt-center gap-2 mtb-8'>
        <a href="https://www.google.com/" rel="noreferrer" target="_blank">
          <img className='img' src="data:image/png;base64,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" alt=" github img" />
        </a>
        <a href="https://www.google.com/" rel="noreferrer" target="_blank">
          <img className='img' src="data:image/png;base64,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" alt="twitter img" />
        </a>
        <a href="https://www.google.com/" rel="noreferrer" target="_blank">
          <img className='img' src="data:image/jpeg;base64,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" alt="linkedin img" />
        </a> 
      </section>
    </footer>
  )
}

export default Footer
