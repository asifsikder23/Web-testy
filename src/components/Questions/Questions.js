import React from 'react';
import './Quetions.css'

const Questions = ({question}) => {
    console.log(question);
    return (
        <div className='p-5 m-5'>
            <h3>Q: {question.question}</h3>
            <p>Choose the correct answer:</p>

            <div class="container text-center">
                <div class="row g-2">
                    <div class="col-6">
                        <button className='button'> {question.options[0]} </button>
                    </div>
                    <div class="col-6">
                        <button className='button'> {question.options[1]} </button>
                    </div>
                    <div class="col-6">
                        <button className='button'> {question.options[2]} </button>
                    </div>
                    <div class="col-6">
                        <button className='button'> {question.options[3]} </button>
                    </div>
                </div>
                </div>

        </div>
    );
};

export default Questions;