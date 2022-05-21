import React from 'react';
import "./QuizBoard.css";
import { useData } from "../../contexts/DataContext";
import { Link } from 'react-router-dom';

export const QuizBoard = () => {

    const { data, marks } = useData();

    return (
        <div className='quiz-board-container grid jstfy-ctnt-center text-align'>
            <h1>Quiz Board</h1>
            <section>
                <h1>{data[0].title}</h1>
                <h2>Your Score is {marks} out of 50</h2>
                <h2>Your IQ level is Average</h2>
                <Link to="/rule">
                    <button className='play-again-btn'>Play Again</button>
                </Link>
            </section>
        </div>
    )
}
