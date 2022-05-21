import React from 'react';
import { Link } from "react-router-dom";
import "./Rules.css";
import { useData } from '../../contexts/DataContext';

const Rules = () => {

    const { name, setName, setCheckAnswer } = useData();

    return (
        <div>
            <section className='grid jstfy-ctnt-center ptb-16'>
                <img className='rules-img m-auto' src="https://health.wyo.gov/wp-content/uploads/2020/08/rules-letters-with-tan-background.jpg" alt="" />
                <input onChange={(e) => setName(e.target.value)} className="input-txt" type="text" value={name} placeholder="Enter Player Name" />
                <ol className='cont'>
                    <li>5 Question in this Quiz Game</li>
                    <li>Every question have 10 marks</li>
                    <li>Here some stages according to your marks</li>
                    <li>First Stage above 40 marks winner</li>
                    <li>Second Stage above 20 and less 40 Average</li>
                    <li>Third Stage above less than 20 poor</li>
                </ol>

                <Link to="/mcq-page">
                    <button onClick={_ => setCheckAnswer([])} className='start-btn w-100 m-auto'>Start Quiz</button>
                </Link>
            </section>
        </div>
    )
}

export { Rules }