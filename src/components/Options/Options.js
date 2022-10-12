import React from 'react';
import Swal from 'sweetalert2';


const Options = ({option, correctAnswer}) => {
    const handleAddToCart=(singleOption, correct) =>{
        if(correct === singleOption){

            Swal.fire(
                'Good job!',
                `${correct}`,
                'success'
              )
        }
        else{
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `
                ${correct}`,
              })
        }
    }
    console.log(option);
    return (
        
            <div className="col-md-6">
                            <div className="p-3 border bg-light">

                                

                                <label className={`text-black rounded`}>
                                    <input
                                        onClick={() => handleAddToCart(option, correctAnswer)}

                                        type="radio"
                                        name="radio-6"
                                        className={`radio checked:bg-danger mx-2`}
                                        value={option}
                                    />
                                    <span>{option}</span>
                                </label>
                            </div>
                        </div>
        
    );
};

export default Options;