import React from 'react';
import Collection from '../components/Collection';
import GiftPanel from '../components/GiftPanel';
import Header from '../components/Header';
import Hero from '../components/Hero';


const Home = () => {
  // const counter = useSelector<IApplicationState>((state) => state.counterReducer);

  return (
    <div className={"w-full h-auto bg-dark-300"}>
      <Header />
      <Hero />
      <GiftPanel />
      <Collection />
      <Collection />
      <Collection />
    </div >
  );
}

export default Home;
