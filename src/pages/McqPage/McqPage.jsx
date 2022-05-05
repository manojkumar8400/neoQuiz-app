import React from 'react'
import "./McqPage.css";

const McqPage = () => {
    return (
        <div>
            <section className='mcq-section grid text-align f-size-24 m-auto p-80 mt-5'>
                <p>Q1. Lorem, ipsum dolor sit amet consectetur nt ut amet nemo ea similique?</p>
                <ol className='mcq m-auto' >
                    <li className='option'>Lorem ilisum dolor sit amet.</li>
                    <li className='option'>Lorem ilisum dolor sit amet.</li>
                    <li className='option'>Lorem ilisum dolor sit amet.</li>
                    <li className='option'>Lorem ilisum dolor sit amet.</li>
                </ol>
                <button className='submit-btn m-auto'>Submit</button>
            </section>
        </div>
    )
}

export default McqPage