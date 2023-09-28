import React from 'react';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jfif';
import img6 from '../../assets/images/img6.jfif';
import img7 from '../../assets/images/img7.jpg';
import img8 from '../../assets/images/img8.jpg';
import img9 from '../../assets/images/img9.jpg';
import img10 from '../../assets/images/img10.jpg';
import img11 from '../../assets/images/img11.jpg';
import img12 from '../../assets/images/img12.jpg';
import img13 from '../../assets/images/img13.jpg';
import img14 from '../../assets/images/img14.jpeg';
import img15  from '../../assets/images/img15.jpeg';
import img16 from '../../assets/images/img16.jpeg';
import img17 from '../../assets/images/img17.jpg';
import img18 from '../../assets/images/img18.jpeg';
import img19 from '../../assets/images/img19.jpg';
import img20 from '../../assets/images/img20.jpeg';
import img21 from '../../assets/images/img21.jpeg';
import img22 from '../../assets/images/img22.jpg';


const Gallery = () => {
    const gal = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22];
  return (
    <>
        <section>
            <div className='container'>
                <div className='grid-container'>
                    {
                        gal.map((val,index) =>
                        <div className='grid-item' key={index}>
                        <img src={val} alt="Image" className='img-fluid'/>
                    </div>
                        )
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Gallery
