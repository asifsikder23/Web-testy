import React from 'react';
import './Quetions.css'
import { EyeIcon } from '@heroicons/react/24/solid';
import Options from '../Options/Options';
import Swal from 'sweetalert2';


const Questions = ({question}) => {
    console.log(question);
    const {options, correctAnswer} = question;
    const showAns =()=>{
        Swal.fire(
            'CORRECT ANSWER!',
            `${correctAnswer}`,
            'success'
          )
    }
    return (
        <div className='p-3 p-md-2 m-3 m-md-0 mx-auto'>

            <div className='d-flex justify-content-end m-md-3'>
            <EyeIcon onClick={showAns} className="eye"/>
            </div>

            <h3>Q: {question.question}</h3>

            <p>Choose the correct answer:</p>

            <div className="container mx-auto">
                    <div className="row g-2">
                        
                        {
                            options.map(option=><Options
                                correctAnswer= {correctAnswer}
                            option={option}
                            ></Options>)
                        }
                        
                    </div>

            </div>

        </div>
    );
};

export default Questions;