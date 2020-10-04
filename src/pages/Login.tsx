import React, { useState } from 'react';
import Header from '../components/Header';
import { Axios } from '../helper/axios_config';
const LOGO = require('../assets/img/logo/LOGO.svg');

const Login = () => {

  const [_email, setEmail] = useState<string | null>('');
  const [_password, setPassword] = useState<string | null>('');

  const handleEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  const handlePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const login_request = await Axios.post('/login', { email: _email, password: _password });
    console.log({ login_request });
  }

  const logOut = async () => {
    const logout = await Axios.get('http://localhost:8000/logout');
    console.log(logout);
  }

  return (
    <>
      <div className={"flex flex-col items-center justify-start w-full h-screen bg-dark-300"}>
        <Header />
        <div dir={"rtl"} className={"flex flex-col items-center self-center justify-center w-2/6 h-auto p-5 mt-auto mb-auto ml-auto mr-auto rounded-lg bg-dark-200"}>
          <img className={"w-64 h-64 "} src={LOGO} alt="" />
          <form onSubmit={handleLogin}>
            <div className={"w-full mt-5"}>
              <label className={"self-start text-2xl font-semibold text-white"} htmlFor="">Email</label>
              <input onChange={handleEmail} dir={"ltr"} className={"w-full h-16 p-5 text-2xl text-white outline-none bg-dark-100"} type="text" />
            </div>
            <div className={"w-full mt-5"}>
              <label className={"self-start text-2xl font-semibold text-white"} htmlFor="">Password</label>
              <input onChange={handlePassword} dir={"ltr"} className={"w-full h-16 p-5 text-2xl text-white outline-none bg-dark-100"} type="password" />
            </div>
            <button className={"w-full h-16 mt-10 text-3xl font-bold text-white bg-indigo-600 rounded-lg outline-none hover:bg-indigo-700"}>Login</button>
          </form>
          <button onClick={logOut} className={"w-full h-16 mt-10 text-3xl font-bold text-white bg-indigo-600 rounded-lg outline-none hover:bg-indigo-700"}>logout</button>
        </div>
      </div>
    </>
  )
}

export default Login
