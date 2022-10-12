import React from 'react';
import logo from '../../../src/logo.png';
import './Home.css';

const Home = () => {
    return (
        <div>
            <section className='py-5 home'>
               
               <div className='container mx-auto'>
                   <div className='d-flex justify-content-center'>
                   <img className='logo mx-auto' src={logo} alt="" />
                   </div>
                   <h3 className='text-center'>
                   Fortunately, human forgetting follows a pattern. We forget exponentially. A graph of our likelihood of getting the correct answer on a quiz sweeps quickly downward over time and then levels off.
                   </h3>
               </div>
               <div className='d-flex justify-content-center'>
               <a href='topic' type="button" class="btn btn-danger ">Get Started</a>
               </div>

           </section>
        </div>
    );
};

export default Home;