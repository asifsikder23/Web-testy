import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center p-5'>Three Interview Quesion & Answer</h1>

            <section class="m-1 m-md-4 bg-dark">
                <div class="shadow-lg p-0 pt-3 pb-3 p-md-5">
                    <h1 class="text-center mb-3 mb-md-5 text-white text-bg-success p-2">
                    What is react perfrom of react Router?
                    </h1>
                    <div class="row d-block d-md-flex justify-content-center align-items-center">
                        <div class="col-12 col-md-6">
                            <img class="img-fluid" src="https://reactrouter.com/twitterimage.jpg" alt=""/>
                        </div>
                        <div class="col-12 col-md-6 text-white">
                        <p class="card-text p-4">Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                        React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="m-1 m-md-4 bg-dark">
                <div class="shadow-lg p-0 pt-3 pb-3 p-md-5">
                    <h1 class="text-center mb-3 mb-md-5 text-white text-bg-success p-2">
                    What is useRef hook?
                    </h1>
                    <div class="row d-block d-md-flex justify-content-center align-items-center">
                        <div class="col-12 col-md-6">
                            <img class="img-fluid" src="https://miro.medium.com/max/1200/1*i84qwZI8_mxxM1zQ3hYd_A.jpeg" alt=""/>
                        </div>
                        <div class="col-12 col-md-6">
                            <p class="text-white p-4">
                            A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master.useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined.
                            <br /> <br />
                            Some of the use cases of useRef hook are:
                            <br />
                            1. To access DOM elements
                            <br />
                            2. To persist values in successive renders
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="m-1 m-md-4 bg-dark">
                <div class="shadow-lg p-0 pt-3 pb-3 p-md-5">
                    <h1 class="text-center mb-3 mb-md-5 text-white text-bg-success p-2">
                    How does Context API work?
                    </h1>
                    <div class="row d-block d-md-flex justify-content-center align-items-center">
                        <div class="col-12 col-md-6">
                            <img class="img-fluid" src="https://miro.medium.com/max/1400/1*Yo1nkzOAMihE8Ia5O411PQ.jpeg" alt=""/>
                        </div>
                        <div class="col-12 col-md-6 p-4">
                            <p class="text-white">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;