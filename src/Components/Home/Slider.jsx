import React from 'react'
import sliderImg1 from '../../assets/images/1550551577home-banner1.jpg';
import sliderImg2 from '../../assets/images/1273170038home-banner2.jpg';
import sliderImg3 from '../../assets/images/1922909411home-banner3.jpg';
import sliderImg4 from '../../assets/images/1858311846home-banner4.jpg';
import sliderImg5 from '../../assets/images/1952342548home-banner5.jpg';

const Slider = ()=>{
    return(
        <>
            {/* <!-- Carousel --> */}
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

        {/* <!-- Indicators/dots --> */}
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
        </div>
        
        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={sliderImg1}alt="img" className="img-fluid" width={"100%"} />
            </div>
            <div className="carousel-item">
            <img src={sliderImg2} alt="img" className="img-fluid" width={"100%"}/>
            </div>
            <div className="carousel-item">
            <img src={sliderImg3} alt="img" className="img-fluid" width={"100%"}/>
            </div>
            <div className="carousel-item">
            <img src={sliderImg4} alt="img" className="img-fluid" width={"100%"}/>
            </div>
            <div className="carousel-item">
            <img src={sliderImg5} alt="img" className="img-fluid" width={"100%"}/>
            </div>
        </div>
        
        {/* <!-- Left and right controls/icons --> */}
        <div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
        </div>

        <div>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>
        
        <div className="container">
            <div className='row'>
                <div className='col-sm-3'>
                    <h4 className="overflow-hidden">Nifa Updates::</h4>
                </div>
                <div className='col-sm-9'>
                     <div className="scrolling-text">
                        <p>All NIFA courses are now available worldwide through our Live and Interactive Online Classes. Please download the NIFA app from our online classes page to register for a complimentary trial class..</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Slider;


