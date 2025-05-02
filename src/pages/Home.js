import React from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Places from '../components/Places';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Places />
      <About />
    </>
  );
};

export default Home;