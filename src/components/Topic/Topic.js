import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topic = () => {
    const {data} = useLoaderData();
    
    console.log(data);
    return (
        <div>
            <div className='container block d-md-flex justify-content-center align-items-center px-5 gap-5'>
            <img className='img-fluid' src="https://assets.telegraphindia.com/telegraph/2022/Feb/1644310959_tata-quiz-1.jpg" alt="" />
            <div>
                <h2>What is the importance of quiz?</h2>
                <p className='fs-4'>
                Quizzes encourage pupils' self awareness of progress and self assessment. By taking quizzes, pupils get instant feedback on their responses. And this can help them identify areas they need to develop themselves and highlight progress for them to be proud of.
                </p>
                
            </div>
            </div>
            <hr />
            <div className="container row row-cols-1 row-cols-md-3 g-4 container m-5">
                {
                    data.map(quizData => <Quiz
                    key={quizData.id}
                    quizData= {quizData}
                    ></Quiz>)
                }

            </div>
        </div>
    );
};

export default Topic;