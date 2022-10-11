import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center p-5'>Three Interview Quesion & Answer</h1>
            <div class="card mb-3">
                <div class="row g-0">
                    
                    <div class="col-md-4">
                    <img src="https://reactrouter.com/twitterimage.jpg" class="img-fluid w-75 rounded-start" alt="..."/>
                    </div>

                    <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">What is react perfrom of react Router?</h2>
                        <p class="card-text">Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                        React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;