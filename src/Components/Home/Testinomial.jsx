import React from 'react'

const Testinomial = () => {
//   const urls = ["https://youtu.be/VrGcY2k5zuc?si=CEjBDAAGmBRlggaX",
//   "https://youtu.be/EnYCmNGoySc?si=LyjnPcYg_zJjxbY7",
//   "https://youtu.be/iX6KgBTH__E?si=rfZ9vKgMe-uo7HVg",
// ]
  
  const description = {
        playerVars: {
        autoplay: 0, // Set to 1 for autoplay
    },
};

  return (
    <>
        {/* <section className='testi_bgImg mt-5 p-5'>
            <div className='container'>
              <div className='row'>
                  {
                    urls.map((value,index)=>
                    <div className='col-sm-4' key={index}>
                        <iframe src={value.urls} style={value.description} className="embed-responsive-item" title={`Video ${index + 1}`} >
                      </iframe>
                    </div>
                    )
                  }
              </div>
            </div>
        </section> */}

        <section className='testi_bgImg mt-5 p-5'>
          <div className='container'>
            <div className='row mt-5'>
              <div>
                <h3 className="text-center text-white">Student's Testimonial</h3>
              </div>
              <div className='col-sm-4 mt-4 testinomial-column'>
                <div className="">
                  <iframe src="https://www.youtube.com/embed/VrGcY2k5zuc?si=DR7a_pT8rfn5AKO3" title="YouTube video player" style={description} className="embed-responsive-item testinomial-video img-thumbnail"></iframe>
                </div>
              </div>
              <div className='col-sm-4 mt-4 testinomial-column'>
                <div className="">
                  <iframe  src="https://www.youtube.com/embed/VrGcY2k5zuc?si=DR7a_pT8rfn5AKO3" title="YouTube video player" style={description} className="embed-responsive-item testinomial-video img-thumbnail"></iframe>
                </div>
              </div>
              <div className='col-sm-4 mt-4 testinomial-column'>
                <div className="">
                  <iframe  src="https://www.youtube.com/embed/VrGcY2k5zuc?si=DR7a_pT8rfn5AKO3" title="YouTube video player" style={description} className="embed-responsive-item testinomial-video img-thumbnail" ></iframe>
                </div>
              </div>
            </div>

            {/* 2nd-row */}
            <div className='row mt-4'>
              <div className='col-sm-4 mt-3 testinomial-column'>
                <div className="">
                  <iframe  src="https://www.youtube.com/embed/VrGcY2k5zuc?si=DR7a_pT8rfn5AKO3" title="YouTube video player" style={description} className="embed-responsive-item testinomial-video img-thumbnail"></iframe>
                </div>
              </div>
              <div className='col-sm-4  mt-3 testinomial-column'>
                <div className="">
                  <iframe  src="https://www.youtube.com/embed/VrGcY2k5zuc?si=DR7a_pT8rfn5AKO3" title="YouTube video player" style={description} className="embed-responsive-item testinomial-video img-thumbnail"></iframe>
                </div>
              </div>
              <div className='col-sm-4  mt-3 testinomial-column'>
                <div className="">
                  <iframe  src="https://www.youtube.com/embed/VrGcY2k5zuc?si=DR7a_pT8rfn5AKO3" title="YouTube video player" style={description} className="embed-responsive-item testinomial-video img-thumbnail"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Testinomial
