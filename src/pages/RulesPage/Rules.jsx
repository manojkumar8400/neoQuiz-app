import React from 'react';
import "./Rules.css";

const Rules = () => {
    return (
        <div className='rules-container'>
            <section className='rules-section'>
                <img className='rules-img' src="https://health.wyo.gov/wp-content/uploads/2020/08/rules-letters-with-tan-background.jpg" alt="" />
                <ol className='cont'>
                    <li>10 Question in this Quiz Game</li>
                    <li>Every question time for 30 second</li>
                    <li>Time limit - 10 minutes</li>
                    <li>Every question have 10 marks</li>
                    <li>Here some stages according to your marks</li>
                    <li>First Stage above 70 marks winner</li>
                    <li>Second Stage above 50 and less 70 Average</li>
                    <li>Third Stage above 30 and less 50 poor</li>
                </ol>
                <button className='start-btn'>Start Quiz</button>
            </section>
        </div>
    )
}

export default Rules