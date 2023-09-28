import React from 'react';
import logoImg from '../assets/images/nifa-new-logo.png';
import { BsTelephone, BsEnvelope } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa/';
import { PiTwitterLogoLight, PiYoutubeLogoLight } from 'react-icons/pi';
import { FiFacebook } from 'react-icons/fi';


const Navbar = () => {
    return (
        <>
            <div className='conteiner top-header'>
                <div className='row text-center p-2'>
                    <div className='col-sm-4 text-white header1'>
                        <p>Welcome to the National Institute of Fine Arts</p>
                    </div>
                    <div className="col-sm-4 d-flex flex-wrap header2">
                        <div>
                            <span>
                                <a href="/" className="top-header-icon text-white mx-2">
                                    <BsTelephone />
                                    &nbsp; 9555112200 </a>
                            </span>
                            <span>
                                <a href="/" className="top-header-icon text-white  mx-2">
                                    <BsTelephone />
                                    &nbsp; 9810130552 </a>
                            </span>
                        </div>
                    </div>
                    <div className='col-sm-4 text-white header2'>
                        <div className="d-flex flex-row flex-wrap">
                            <a href="/" className="top-header-icon text-white">
                                 <BsEnvelope className='mx-1' style={{fontsize:"19px"}}/> 
                                  admission@nifafinearts.com </a>
                            <span><a href="/" className="text-white">
                                 <FiFacebook className='mx-1'/>    
                            </a></span>
                            <span><a href="/" className="text-white">
                                 <PiTwitterLogoLight className='mx-1' />
                          </a></span>
                            <span><a href="/" className="text-white">
                                 <FaInstagram className='mx-1'/>
                          </a></span>
                            <span><a href="/" className="text-white">
                                 <PiYoutubeLogoLight className='mx-1'/>
                          </a></span>
                        </div>
                    </div>
                </div>
            </div>


            <nav className="navbar navbar-expand-sm bg-white navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logoImg} alt="logoImg" className='img-fluid' width={'100%'} />
                    </a>
                    <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleMyNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-wrap" id="collapsibleMyNavbar">
                        <ul className="navbar-nav flex-wrap">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Activity</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Admission</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Art gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Franchise</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Online classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Video</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pay Fee</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;