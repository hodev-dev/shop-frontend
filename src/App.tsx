import React, { useEffect } from 'react';
import { FaSteamSymbol, FaPlaystation, FaXbox, FaTelegram, FaInstagram, FaWhatsapp, FaAppleAlt, FaApple } from "react-icons/fa";
import Card from './components/Card';
import './assets/css/tailwind.css';

const App = () => {

  return (
    <div className={"w-full h-auto bg-dark-300"}>
      <div className={"flex w-full h-16 bg-dark-300"}>
        <div className={"flex items-center justify-center w-2/12 h-16"}>
          <div className={"flex items-center justify-center w-10 h-10 text-3xl font-semibold text-indigo-600 bg-white rounded-lg"}>
            <FaTelegram />
          </div>
          <div className={"flex items-center justify-center w-10 h-10 ml-5 text-3xl font-semibold text-pink-600 bg-white rounded-lg"}>
            <FaInstagram />
          </div>
          <div className={"flex items-center justify-center w-10 h-10 ml-5 text-3xl font-semibold text-green-800 bg-white rounded-lg"}>
            <FaWhatsapp />
          </div>
        </div>
        <div className={"flex items-center justify-center w-8/12 h-16"}>
          <input className={"w-8/12 h-12 p-5 text-3xl text-gray-300 rounded-lg outline-none bg-dark-100"} type="text" />
        </div>
        <div className={"flex items-center justify-center w-2/12 h-16"}>
          <div className={"flex items-center justify-center w-32 h-12 text-3xl font-semibold text-black bg-white rounded-lg"}>SZS</div>
        </div>
      </div>
      <div className={"flex w-full bg-contain h-sixty bg-dark-300"}>
        <img className={"object-cover object-top w-full h-auto"} src={require('./assets/img/controll_bg.jpg')} alt="controll" />
      </div>
      <div className={"flex items-center justify-center w-full h-20 bg-contain bg-dark-300"}>
        <div className={"flex items-center justify-center w-64 h-16 text-3xl font-semibold leading-none text-purple-700 bg-white rounded-md"}>
          <FaSteamSymbol />
          <span className={"ml-4"}>Steam Wallet</span>
        </div>
        <div className={"flex items-center justify-center w-64 h-16 ml-5 text-3xl font-semibold leading-none text-black bg-white rounded-md"}>
          <FaApple />
          <span className={"ml-4"}>Apple Store</span>
        </div>
        <div className={"flex items-center justify-center w-64 h-16 ml-5 text-3xl font-semibold leading-none text-indigo-800 bg-white rounded-md"}>
          <FaPlaystation />
          <span className={"ml-4"}>Playstation</span>
        </div>
      </div>

      <div className={"flex flex-row-reverse items-center w-full h-16 p-8 border border-black bg-dark-300"}>
        <h2 className={"text-3xl text-white"}>تخفیف ویژه</h2>
        <h4 className={"flex-1 text-white text-1xl"}>موارد بیشتر</h4>
      </div>
      <div className={"flex w-full h-auto p-8 overflow-x-scroll border border-black bg-dark-200"}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={"flex flex-row-reverse items-center w-full h-16 p-8 border border-black bg-dark-300"}>
        <h2 className={"text-3xl text-white"}>تخفیف ویژه</h2>
        <h4 className={"flex-1 text-white text-1xl"}>موارد بیشتر</h4>
      </div>
      <div className={"flex w-full h-auto p-8 overflow-x-scroll border border-black "}>
        <Card />
        <Card />
        <Card />
      </div>
    </div >
  );
}

export default App;
