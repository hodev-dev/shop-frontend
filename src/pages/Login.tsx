import React from 'react'
import Collection from '../components/Collection'
import GiftPanel from '../components/GiftPanel'
import Header from '../components/Header'
import Hero from '../components/Hero'
const LOGO = require('../assets/img/logo/LOGO.svg');

const Login = () => {
  return (
    <>
      <div className={"flex flex-col items-center justify-start w-full h-screen bg-dark-300"}>
        <Header />
        <div dir={"rtl"} className={"flex flex-col items-center self-center justify-center w-2/6 h-auto p-5 mt-auto mb-auto ml-auto mr-auto rounded-lg bg-dark-200"}>
          <img className={"w-64 h-64 "} src={LOGO} alt="" />
          <div className={"w-full mt-5"}>
            <label className={"self-start text-2xl font-semibold text-white"} htmlFor="">Email</label>
            <input dir={"ltr"} className={"w-full h-16 p-5 text-2xl text-white outline-none bg-dark-100"} type="text" />
          </div>
          <div className={"w-full mt-5"}>
            <label className={"self-start text-2xl font-semibold text-white"} htmlFor="">Password</label>
            <input dir={"ltr"} className={"w-full h-16 p-5 text-2xl text-white outline-none bg-dark-100"} type="text" />
          </div>
          <button className={"w-full h-16 mt-10 text-3xl font-bold text-white bg-indigo-600 rounded-lg outline-none hover:bg-indigo-700"}>Login</button>
        </div>
      </div>
    </>
  )
}

export default Login
