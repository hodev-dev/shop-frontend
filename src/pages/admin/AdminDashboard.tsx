import React, { useEffect } from 'react';
import { IoIosKeypad, IoLogoGameControllerB, IoMdCard, IoMdList } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as authActions from '../../actions/authAction';
import Header from '../../components/Header';
import { IauthReducer } from '../../reducers/authReducer';
import { IApplicationState } from '../../reducers/rootReducer';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store: IApplicationState): IauthReducer => store.authReducer);

  useEffect(() => {
  }, [])

  const logout = () => {
    dispatch(authActions.logout());
  }

  return (
    <>
      <Header />
      <div className={"flex h-screen"}>
        <div className={"flex w-10/12 h-auto bg-dark-200"}></div>
        <div className={"flex flex-col w-2/12 h-auto border border-t-0 border-black bg-dark-300"}>
          <div className={"flex flex-col items-center w-full h-32 p-3 border border-t-0 border-l-0 border-black bg-dark-200"}>
            <h1 className={"w-full font-semibold text-gray-500 "}>{user.name}</h1>
            <h1 className={"w-full text-gray-500 "}>{user.email}</h1>
            <button onClick={logout} className={"flex items-center justify-center w-full h-12 mt-2 text-gray-500 bg-dark-300"}>
              Log Out
            </button>
          </div>
          <Link to={"/admin"} className={"flex items-center w-full h-16 p-3 text-gray-500 border border-t-0 border-l-0 border-black hover:bg-dark-100 bg-dark-200"}>
            <IoIosKeypad size={32} />
            <h1 className={"w-full ml-5 font-semibold text-gray-500 "}>Dashboard</h1>
          </Link>
          <Link to={"/"} className={"flex items-center w-full h-16 p-3 text-gray-500 border border-t-0 border-l-0 border-black hover:bg-dark-100 bg-dark-200"}>
            <IoLogoGameControllerB size={32} />
            <h1 className={"w-full ml-5 font-semibold text-gray-500 "}>Gamses</h1>
          </Link>
          <Link to={"/"} className={"flex items-center w-full h-16 p-3 text-gray-500 border border-t-0 border-l-0 border-black hover:bg-dark-100 bg-dark-200"}>
            <IoMdList size={32} />
            <h1 className={"w-full ml-5 font-semibold text-gray-500 "}>Lists</h1>
          </Link>
          <Link to={"/"} className={"flex items-center w-full h-16 p-3 text-gray-500 border border-t-0 border-l-0 border-black hover:bg-dark-100 bg-dark-200"}>
            <IoMdCard size={32} />
            <h1 className={"w-full ml-5 font-semibold text-gray-500 "}>Cards</h1>
          </Link>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
