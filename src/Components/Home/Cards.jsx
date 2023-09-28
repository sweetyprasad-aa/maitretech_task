import React from 'react';
import sketch from '../../assets/images/animation-sketching.jpg';
import paint from '../../assets/images/3mchc.jpg';
import eye from '../../assets/images/1ydfa.jpg';
import brush from '../../assets/images/2ydfa.jpg';
import prepration from '../../assets/images/entrance-prepration.jpg';
import painting from '../../assets/images/bfa.jpg';
import ma from '../../assets/images/ma.jpg';
import entrance3 from '../../assets/images/entrance-prepration3.jpg';
import kidl1 from '../../assets/images/kidl1.jpg';
import kidl2 from '../../assets/images/kidl2.jpg';
import entrance2 from '../../assets/images/entrance-prepration2.jpg';
import hccfk from '../../assets/images/hccfk.jpg';

const Cards = () => {
    const cardImg = [
        {
            id:1,
            imgs: sketch,
            desc: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
        },
        {
            id:2, 
            imgs: paint,
            desc: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
        },
        {
            id:3,
            imgs: eye,
            desc: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
        },
        {
            id:4,
            imgs: brush,
            desc: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
        },
        {
            id:5,
            imgs: painting,
            desc: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
        },
        {
            id:6,
            imgs: ma,
            desc: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
        },
        {
            id:7,
            imgs: entrance3,
            desc: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
        },
        {
            id:8,
            imgs: kidl1,
            desc: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
        },
        {
            id:9,
            imgs: kidl2,
            desc: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
        },
        {
            id:10,
            imgs: entrance2,
            desc: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
        },
        {
            id:11,
            imgs: hccfk,
            desc: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
        },
        {
            id:12,
            imgs: prepration,
            desc: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
        }
    ]
  return (
    <>
        <section className='cardBg-img p-5'>
            <div className="container">
                <div className="row mt-5">
                <h2 className='text-center overflow-hidden'>Our Courses</h2>
                    {
                        cardImg.map((item)=>
                            <div className='col-sm-3 p-3 mt-3 card-column' key={item.id}>
                                <div className="card">
                                    <img src={item.imgs} alt="img"  className='img-fluid' width={'100%'}/>
                                    <div className="card-body p-3">
                                        <p className="card-text">{item.desc}</p>   
                                        <button className="btn content-btn px-4">Know More</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Cards
