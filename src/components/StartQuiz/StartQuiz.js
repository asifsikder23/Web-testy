import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ListBulletIcon } from '@heroicons/react/24/solid'
import './StartQuiz.css'
import Questions from '../Questions/Questions';

const StartQuiz = () => {
    const quizData = useLoaderData();
    const {questions} = quizData.data;
    console.log(questions);
    return (
        <div className='container mt-4'>
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                    <ListBulletIcon className="h-6 w-6 text-blue-500 icon"/>
                    <h4>{quizData.data.questions.length} quetions</h4>
                </div>
                <div>
                    <h2>Topic: {quizData.data.name}</h2>
                </div>
            </div>
            <div className='bg-dark text-white p-5 m-5'>
                {
                    questions.map(question=> <Questions
                    question={question}
                    ></Questions>)
                }
            </div>
        </div>
        
    );
};

export default StartQuiz;