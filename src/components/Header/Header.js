import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='bg-dark mx-auto'>
            <div className='container d-flex align-items-center'>
                <div className='nav-logo d-flex align-items-center gap-3'>
                    <img src={logo} alt="" />
                    <h3 className='text-white'>WebTesty</h3>
                </div>
                <div className='nav-item'>
                    <Link className='text-decoration-none text-white fs-4 pe-4' to ="/topic"><span className='hover'>Topic</span></Link>
                    <Link className='text-decoration-none text-white fs-4 pe-4' to ="/static"><span className='hover'>Statics</span></Link>
                    <Link className='text-decoration-none text-white fs-4 pe-4' to ="/blog"><span className='hover'>Blog</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;