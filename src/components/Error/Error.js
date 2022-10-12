import React from 'react';

const Error = () => {
    return (
        
            <div className="container">
                    
                        <div className="d-flex justify-content-center align-items-center py-5">
                            <div className="error-template">
                                <h1>
                                    Oops!</h1>
                                <h2>
                                    404 Not Found</h2>
                                <div className="error-details">
                                    Sorry, an error has occured, Requested page not found!
                                </div>
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