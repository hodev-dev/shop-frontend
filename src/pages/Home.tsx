import React from 'react';
import Header from '../components/Header';
import GiftPanel from '../components/GiftPanel';
import Hero from '../components/Hero';
import Collection from '../components/Collection';

const Home = () => {
  return (
    <div className={"w-full h-auto bg-dark-300"}>
      <Header />
      <Hero />
      <GiftPanel />
      <Collection />
    </div >
  );
}

export default Home;
