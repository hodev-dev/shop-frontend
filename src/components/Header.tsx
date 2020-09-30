import React from 'react';
import { FaInstagram, FaStore, FaTelegram, FaUserCircle, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const LOGO = require('../assets/img/logo/LOGO.svg');

const Header = () => {
  return (
    <>
      <div className={"flex items-center w-full h-20 border border-black bg-dark-300"}>
        <div className={"flex items-center justify-center w-3/12 h-16"}>
          <Link to={"/login"} className={"flex items-center justify-center w-12 h-12 text-3xl font-semibold text-black bg-white rounded-lg hover:bg-black hover:text-white"}>
            <FaUserCircle size={32} />
          </Link>
          <div className={"flex items-center justify-center w-12 h-12 ml-5 text-3xl font-semibold text-indigo-600 bg-white rounded-lg hover:bg-indigo-600 hover:text-white"}>
            <FaTelegram size={32} />
          </div>
          <div className={"flex items-center justify-center w-12 h-12 ml-5 text-3xl font-semibold text-pink-600 bg-white rounded-lg hover:bg-pink-600 hover:text-white"}>
            <FaInstagram size={32} />
          </div>
          <div className={"flex items-center justify-center w-12 h-12 ml-5 text-3xl font-semibold text-green-800 bg-white rounded-lg hover:bg-green-600 hover:text-white"}>
            <FaWhatsapp size={32} />
          </div>
          <Link to={"/"}>
            <div className={"flex items-center justify-center w-12 h-12 ml-5 text-3xl font-semibold text-purple-600 bg-white rounded-lg hover:bg-purple-600 hover:text-white"}>
              <FaStore size={32} />
            </div>
          </Link>
        </div>
        <div className={"flex items-center justify-center w-7/12 h-16 opacity-50"}>
          <input className={"w-8/12 h-12 p-5 text-3xl text-gray-300 rounded-lg outline-none bg-dark-100"} type="text" />
        </div>
        <Link to={"/"} className={"flex items-center justify-center w-2/12 h-16 "}>
          <div className={"flex items-center justify-center w-32 h-12 text-3xl font-extrabold text-white rounded-lg"}>MaxGift</div>
          <img className={"w-16 h-16"} src={LOGO} alt="logo" />
        </Link>
      </div>
    </>
  )
}

export default Header
