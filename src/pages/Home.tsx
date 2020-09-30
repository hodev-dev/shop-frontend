import React from 'react';
import Header from '../components/Header';
import GiftPanel from '../components/GiftPanel';
import Hero from '../components/Hero';
import Collection from '../components/Collection';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from '../reducers/rootReducer';
import { Add } from '../actions/counterAction';


const Home = () => {
  const counter = useSelector<IApplicationState>((state) => state.counterReducer);

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
