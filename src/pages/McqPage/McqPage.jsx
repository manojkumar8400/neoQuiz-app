import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./McqPage.css";
import { useData } from "../../contexts/DataContext";

const McqPage = () => {


    const { data, count, setCount, setMarks, checkAnswer, setCheckAnswer } = useData();
    const navigate = useNavigate();

    const optionHandler = (index) => {
        setCheckAnswer([...checkAnswer, index])
        setCount(prev => prev + 1)
        if (data[count].ans === index) {
            setMarks(marks => marks + 10);
        }
        if (count === 4) {
            setCount(0)
            navigate("/result")
        }
    }

    return (
        <div className='relative'>
            <section className='ques-section grid-center text-align f-size-24 m-auto p-80 mt-5'>
                <span>{[count + 1]} / 5</span>
                <p className='question'>Q{[count + 1]} {data[count].ques}</p>
                <ol className='mcq m-auto' >
                    {
                        data[count].opt.map((opt, index) => <li key={opt}><button
                            onClick={() => { optionHandler(index) }} className="option"> {opt}</button> </li>)
                    }
                </ol>
            </section>
        </div>
    )
}

export { McqPage }