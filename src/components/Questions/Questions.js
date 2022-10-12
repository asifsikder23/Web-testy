import React from 'react';
import './Quetions.css'

const Questions = ({question}) => {
    return (
        <div className='p-3 p-md-5 m-3 m-md-5 mx-auto'>
            <h3>Q: {question.question}</h3>
            <p>Choose the correct answer:</p>

            <div className="container mx-auto">
                    <div className="row g-2">
                        <div className="col-md-6">
                            <div className="p-3 border bg-light">

                                <label className={`text-black rounded`}>
                                    <input
                                        // onClick={() => hendleAddToCart(option, correctAnswer)}
                                        type="radio"
                                        name="radio-6"
                                        className={`radio checked:bg-danger mx-2`}
                                        value={question.options[0]}
                                    />
                                    <span>{question.options[0]}</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-3 border bg-light">

                                <label className={`text-black rounded`}>
                                    <input
                                        // onClick={() => hendleAddToCart(option, correctAnswer)}
                                        type="radio"
                                        name="radio-6"
                                        className={`radio checked:bg-danger mx-2`}
                                        value={question.options[1]}
                                    />
                                    <span>{question.options[1]}</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-3 border bg-light">

                                <label className={`text-black rounded`}>
                                    <input
                                        // onClick={() => hendleAddToCart(option, correctAnswer)}
                                        type="radio"
                                        name="radio-6"
                                        className={`radio checked:bg-danger mx-2`}
                                        value={question.options[2]}
                                    />
                                    <span>{question.options[2]}</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-3 border bg-light">

                                <label className={`text-black rounded`}>
                                    <input
                                        // onClick={() => hendleAddToCart(option, correctAnswer)}
                                        type="radio"
                                        name="radio-6"
                                        className={`radio checked:bg-danger mx-2`}
                                        value={question.options[3]}
                                    />
                                    <span>{question.options[3]}</span>
                                </label>
                            </div>
                        </div>
                        
                    </div>

                    </div>

        </div>
    );
};

export default Questions;