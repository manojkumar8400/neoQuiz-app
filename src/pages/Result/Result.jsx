import React from 'react';
import { Link } from 'react-router-dom';
import "./Result.css";
import { useData } from "../../contexts/DataContext";

const Result = () => {

  const { data, name, marks, checkAnswer } = useData();

  return (
    <div className='mcq-container' key={data.name}>
      <h1 className='m-auto'>Result</h1>
      <p className='m-auto f-size-20'>Hello {name}, Your Final score -: {marks} / 50</p>
      {
        data.map((value, i) =>
          <section className='mcq-section result-style grid-center' key={value.ques}>
            <p className='question'> {value.ques}</p>
            <hr className='hr' />
            <ol className='mcq'>
              {
                value.opt.map((option, index) => {
                  if (value.ans === index) {
                    return <li id="bg-green" className='default-answer' key={option}>{option}</li>
                  } else if (checkAnswer[i] === index) {
                    return <li id="bg-red" className='default-answer' key={option}>{option}</li>
                  } else {
                    return <li className='default-answer' key={option}>{option}</li>
                  }
                })
              }
            </ol>
          </section>
        )
      }
      <Link to="/quiz-board"  className='m-auto'>
        <button className='f-size-20 mtb-16 p-8'>Quiz Board</button>
      </Link>
      <button onClick={() => window.scrollTo(0, 0)} className='up-arrow'>&#10153;</button>
    </div>
  )
}

export { Result } 