import React from 'react';
import Collections from '../components/Collection';
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
      <Collections collections={[]} />
    </div >
  );
}

export default Home;
