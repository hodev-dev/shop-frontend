import Axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Collections from '../components/Collection';
import GiftPanel from '../components/GiftPanel';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SWITCH, { CASE, DEFAULT } from '../components/Logics/Switch';
import Spinner from '../components/Spinner';

enum collectionsStatusType {
  LOADING,
  SUCCESS,
  FAILED
}

const Home = () => {
  const [collections, setCollections] = useState([]);
  const [collectionsStatus, setCollectionsStatus] = useState(collectionsStatusType.LOADING);

  useEffect(() => {
    request_collections();
  }, [])

  const request_collections = () => {
    const request = Axios.get('/collections');
    request.then((response: AxiosResponse) => {
      setCollections(response.data);
      setCollectionsStatus(collectionsStatusType.SUCCESS);
    }).catch(() => {
      setCollectionsStatus(collectionsStatusType.FAILED);
      toast.error('something wrong!');
    });
  }
  return (
    <div className={"w-full h-screen bg-dark-300"}>
      <Header />
      <Hero />
      <GiftPanel />
      <SWITCH variable={collectionsStatus}>
        <CASE check={collectionsStatusType.SUCCESS}>
          <Collections collections={collections} />
        </CASE>
        <CASE check={collectionsStatusType.FAILED}>
          <h1>FAILED</h1>
        </CASE>
        <DEFAULT>
          <Spinner />
        </DEFAULT>
      </SWITCH>
    </div >
  );
}

export default Home;
