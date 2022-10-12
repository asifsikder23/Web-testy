import React from 'react';

const Error = () => {
    return (
        
            <div className="container">
                    
                        <div className="d- block d-md-flex justify-content-center align-items-center py-5">
                            <div className='d-flex justify-content-center px-5 pb-5'>
                                <img className='img-fluid' src="https://media.tenor.com/eDchk3srtycAAAAi/piffle-error.gif" alt="" />
                            </div>
                            <div className="error-template">
                                <h1>Oops!</h1>
                                <h2>404 Not Found</h2>

                                    <p>Sorry, an error has occured, <br /> Requested page not found!</p>

                                <div className="error-actions">
                                    <a href="/" className="btn btn-primary btn-lg">
                                        Take Me Home </a>
                                </div>
                            </div>
                        </div>
                    
                </div>
        
    );
};

export default Error;