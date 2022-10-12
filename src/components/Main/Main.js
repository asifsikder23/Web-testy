import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Main.css';


const Main = () => {
    return (
        <div className='bg'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            

        </div>
    );
};

export default Main;