import React from 'react'
import "./McqPage.css";

const McqPage = () => {
    return (
        <div className='mcq-container'>
            <section className='mcq-section'>
                <p className='question'>Q1. Lorem, ipsum dolor sit amet consectetur nt ut amet nemo ea similique?</p>
                <ol className='mcq'>
                    <li className='mcq-ans'>Lorem ilisum dolor sit amet.</li>
                    <li className='mcq-ans'>Lorem ilisum dolor sit amet.</li>
                    <li className='mcq-ans'>Lorem ilisum dolor sit amet.</li>
                    <li className='mcq-ans'>Lorem ilisum dolor sit amet.</li>
                </ol>
                <button className='submit-btn'>Submit</button>
            </section>
        </div>
    )
}

export default McqPage