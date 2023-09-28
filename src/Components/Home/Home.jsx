import React from 'react';
import Slider from './Slider';
import Content from './Content';
import Cards from './Cards';
// import Gallery from './Gallery';
import Testinomial from './Testinomial';

const Home = () => {
  return (
    <>
      <Slider />
      <Content />
      <Cards />
      {/* <Gallery /> */}
      <Testinomial/>
    </>
  )
}

export default Home
