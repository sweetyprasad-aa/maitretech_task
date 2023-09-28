import React from 'react';
import AppStore from '../../assets/images/gplay.png';
import Googlepay from '../../assets/images/appstore.png';


const Content = () => {
    const videoUrl = "https://www.youtube.com/embed/-9cJjaLXKqE?rel=0";

    const opts = {
        height: '380px',
        width: '100%',
        playerVars: {
        autoplay: 0, // Set to 1 for autoplay
    },
};
  return (
    <>
      <section className='mt-5 p-4'>
            <div className='container'>
                <div className="row text-center">
                    <div>
                        <h1 className='overflow-hidden'>Welcome To National Institute of Fine Arts</h1>
                    </div>            
                        <p className='content_para mt-3'>National Institute of Fine Arts (NIFA) is a national center for education in arts, fostering the excellence of emerging and established artists and advancing art to create a more human world. National Institute of Fine Arts  (NIFA) was established by MRS RENU KHERA in Delhi and NCR of Delhi on July 2005. Institute established another unit in Panna (M.P) which is affiliated to Raja Mansingh Music and Arts University (Gwalior). Its aim is to provide education and training to students on a wide spectrum of Fine Arts.</p>

                        <p className='content_para'>National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes. We seek to shape the global future of arts with an emphasis on excellence that allows its members to reach for the highest artistic standards as individuals while recognizing that the Art is one of the foundations of a healthy and creative society. This is a place where national and international leaders in the arts gather, teach, show and perform their work. The institute prides itself on its openness and on creating an environment that is safe, welcoming, and built on mutual respect.</p>

                        <p className='content_para'><strong>
                            National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes.
                        </strong></p>
                        <div>
                            <button className="btn content-btn px-4">Read More</button>
                        </div>   
                
                </div>
            </div>
      </section>

      {/* 2nd section one video */}

      <section className="bg-img p-5 mt-5">
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-5 text-white'>
                        <div >
                            <h2 className='overflow-hidden mt-3'>Online Classes</h2>
                            <p>Dear Students/Parents, Nifa presents its Learning App for your regular art practice in which we have added many amazing features Like: Step-by-step recorded demo videos prepared by your faculty members. Regular assessment of your practise through assignment section. Live class section from same app. Attendance, payment invoice, art news, announcements, important information and direct connect with the management team are some more features. So hurry up n join now to experience personalised coaching by experts sitting at your home.</p>
                            <p>We wish u Happy Learning. Stay Safe n Healthy.</p>
                            <button className="btn content-btn px-4">Read More</button>
                        </div>
                        <div className='mt-3'>
                            <h4 className='overflow-hidden'>Download The App</h4>
                            <span><img src={AppStore} alt="img" className='img-fluid download-img  mx-2'/></span>
                            <span><img src={Googlepay} alt="img" className='img-fluid download-img  mx-2' /></span>
                        </div>
                    </div>
                    <div className='col-sm-7'>
                        <div className='embed-responsive embed-responsive-16by9 mt-5'>
                            <iframe src={videoUrl} style={opts} className="embed-responsive-item img-thumbnail" title="nifa"></iframe>     
                        </div>
                    </div>
                </div>
            </div>
      </section>
    </>
  )
}

export default Content;
