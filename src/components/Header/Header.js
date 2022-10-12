import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    return (

            <div className="navbar navbar-expand-lg bg-dark">
                <div className="container mx-auto">
                    <a className="navbar-brand" href="/">
                    <div className='nav-logo d-flex align-items-center gap-3'>
                    <img className='d-none d-md-flex' src={logo} alt="" />
                     <h3 className='text-white'>WebTesty</h3>
                 </div>
                    </a>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className='nav-item collapse navbar-collapse' id="navbarSupportedContent">
                     <Link className='text-decoration-none text-white fs-4 pe-4'  to ="/topic"><span className='hover'>Topic</span></Link>

                     <Link className='text-decoration-none text-white fs-4 pe-4' to ="/static"><span className='hover'>Statics</span></Link>

                     <Link className='text-decoration-none text-white fs-4 pe-4' to ="/blog"><span className='hover'>Blog</span></Link>
                 </div>
                    


                    </div>
                </div>
            
    );
};

export default Header;