import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({quizData}) => {
    
    return (
            <div className="col">
                    <div className="card h-100 bg-dark">
                        <img src= {quizData.logo} className="card-img-top" alt="..."/>
                        <div className="card-body text-white">
                            <h3 className="card-title">{quizData.name}</h3>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                <p className="card-text">Total Quiz: <span>{quizData.total}</span></p>
                                </div>
                                <div>
                                <Link to={`/quiz/${quizData.id}`}>
                                <button type="button" className="btn btn-danger">Start Quiz</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Quiz;