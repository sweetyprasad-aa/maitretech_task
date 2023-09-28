import React from 'react';
import AppStore from '../assets/images/gplay.png';
import Googlepay from '../assets/images/appstore.png';

const Footer = () => {
  return (
    <>
        <footer className="footer-bgImg  p-5">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-3">
                            <ul className="list-groups ">Company
                                <li className="list-group-item"><a href="/">About</a></li>
                                <li className="list-group-item"><a href="/">Facilities</a></li>
                                <li className="list-group-item"><a href="/">Career</a></li>
                                <li className="list-group-item"><a href="/">Contact us</a></li>
                                <li className="list-group-item"><a href="/">Terms & Conditions</a></li>
                                <li className="list-group-item"><a href="/">Refund Policy</a></li>
                                <li className="list-group-item"><a href="/">Privacy Policy</a></li>
                            </ul>
                    </div>
                    <div className="col-sm-3">
                            <ul className="list-groups">Activities
                                <li className="list-group-item"><a href="/">Art Gallery</a></li>
                                <li className="list-group-item"><a href="/">Workshops</a></li>
                                <li className="list-group-item"><a href="/">Outdoor Activities</a></li>
                                <li className="list-group-item"><a href="/">Media Coverage</a></li>
                                <li className="list-group-item"><a href="/">Art Events</a></li>
                                <li className="list-group-item"><a href="/">Exhibition</a></li>
                                <li className="list-group-item"><a href="/">Daily Activities</a></li>
                            </ul>
                    </div>
                    <div className="col-sm-3">
                            <ul className="list-groups">Popular Course
                                <li className="list-group-item"><a href="/">Diploma in Fine Arts</a></li>
                                <li className="list-group-item"><a href="/">Certificate Hobby Course</a></li>
                                <li className="list-group-item"><a href="/">Entrance Preparation</a></li>
                                <li className="list-group-item"><a href="/">BFA</a></li>
                                <li className="list-group-item"><a href="/">Animation Sketching</a></li>
                                <li className="list-group-item"><a href="/">Kids Diploma</a></li>
                            </ul>
                    </div>
                    <div className="col-sm-3">
                            <ul className="list-groups">Our Locations
                                <li className="list-group-item"><a href="/">Gurgaon (Dlf Phase - 4)</a></li>
                                <li className="list-group-item"><a href="/">Mumbai (Andheri West)</a></li>
                                <li className="list-group-item"><a href="/">South Delhi (Kailash Colony)</a></li>
                                <br/>
                                <p>International Branches</p>
                                <li className="list-group-item"><a href="/">London</a></li>
                                <li className="list-group-item"><a href="/">USA</a></li>
                                <li className="list-group-item"><a href="/">Dubai, UAE</a></li>
                            </ul>
                    </div>
                </div>

                {/* 2nd-row */}
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div>
                            <h4>NIFA Is A Unit Of Nifaedutech Pvt Ltd.</h4>
                            <h5 className="text-bold">Connect With Us</h5>
                            <p>9555112200,9810130552</p>
                            <p>admission@nifafinearts.com</p>
                        </div>
                    </div>
                    <div className="col-sm-6 ">
                        <div className="text-end">
                            <h4 className='overflow-hidden'>Download The App</h4>
                            <span><img src={AppStore} alt="img" className='img-fluid download-img  mx-2'/></span>
                            <span><img src={Googlepay} alt="img" className='img-fluid download-img  mx-2' /></span>
                            <p>© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
