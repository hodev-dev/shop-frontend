import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import * as authActions from '../actions/authAction';
import Header from '../components/Header';
import IF, { ELSE, THEN } from '../components/Logics/IF';
import SWITCH, { CASE, DEFAULT } from '../components/Logics/Switch';
import { IApplicationState } from '../reducers/rootReducer';
const LOGO = require('../assets/img/logo/LOGO.svg');
const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, isLoggedIn, errors, message } = useSelector((store: IApplicationState) => store.authReducer);
  const [_email, setEmail] = useState<string | null>('');
  const [_password, setPassword] = useState<string | null>('');

  useEffect(() => {
    dispatch(authActions.setLoading(true));
  }, [dispatch])

  useEffect(() => {
    if (isLoading) {
      dispatch(authActions.auth_status())
    }
  }, [isLoading, isLoggedIn, dispatch, history])

  const handleEmail = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }, []);

  const handlePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  const handleLogin = async (e: any) => {
    e.preventDefault();
    dispatch(authActions.login(_email, _password));
  }

  const renderError = (key: string) => {
    if (errors) {
      const hasKey = errors.hasOwnProperty(key);
      if (hasKey) {
        return errors[key].map((messege: string, index: number) => {
          return (
            <div dir={"rtl"} key={index} className={"text-sm font-semibold text-red-500"}>
              <h1>{messege}</h1>
            </div>
          )
        });
      }
    }
  }

  return (
    <>
      <Header />
      <SWITCH variable={isLoading}>
        <CASE check={true}>
          <div className={"flex flex-col items-center justify-center w-full h-screen text-6xl text-white bg-dark-300"}>
            <h1>loading</h1>
          </div>
        </CASE>
        <DEFAULT>
          <IF variable={isLoggedIn} logic={"==="} check={false}>
            <THEN>
              <div className={"flex flex-col items-center justify-start w-full h-screen bg-dark-300"}>
                <div dir={"rtl"} className={"flex flex-col items-center self-center justify-center w-2/6 h-auto p-5 mt-auto mb-auto ml-auto mr-auto rounded-lg bg-dark-200"}>
                  <img className={"w-64 h-64 "} src={LOGO} alt="" />
                  <form onSubmit={handleLogin}>
                    <div className={"w-full mt-5"}>
                      <label className={"self-start text-2xl font-semibold text-white"} htmlFor="">Email</label>
                      <input onChange={handleEmail} dir={"ltr"} className={"w-full h-16 p-5 text-2xl text-white outline-none bg-dark-100"} type="text" />
                      {renderError("email")}
                    </div>
                    <div className={"w-full mt-5"}>
                      <label className={"self-start text-2xl font-semibold text-white"} htmlFor="">Password</label>
                      <input onChange={handlePassword} dir={"ltr"} className={"w-full h-16 p-5 text-2xl text-white outline-none bg-dark-100"} type="password" />
                      {renderError("password")}
                    </div>
                    <button className={"w-full h-16 mt-10 text-3xl font-bold text-white bg-indigo-600 rounded-lg outline-none hover:bg-indigo-700"}>Login</button>
                    <IF variable={message} logic={'!=='} check={null}>
                      <THEN>
                        < h1 className={"text-2xl text-red-500"}>
                          {message}
                        </h1>
                      </THEN>
                      <ELSE>
                        <h1>no message</h1>
                      </ELSE>
                    </IF>
                  </form>
                </div>
              </div>
            </THEN>
            <ELSE>
              <Redirect to={'/admin/dashboard'} />
            </ELSE>
          </IF>
        </DEFAULT>
      </SWITCH>
    </>
  )
}

export default Login;
