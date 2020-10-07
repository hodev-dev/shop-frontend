import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/admin/Sidebar';
import Header from '../../components/Header';
import SWITCH, { CASE, DEFAULT } from '../../components/Logics/Switch';
import { Axios } from '../../helper/axios_config';
import { IauthReducer } from '../../reducers/authReducer';
import { IApplicationState } from '../../reducers/rootReducer';

const AdminDashboard = () => {

  enum currenciesStatusType {
    LOADING,
    SUCCESS,
    FAILED
  }

  const { user } = useSelector((store: IApplicationState): IauthReducer => store.authReducer);

  //currency request
  const [currencies, setCurrencies] = useState<any>([]);
  const [currenciesStatus, setCurrenciesStatus] = useState<number>(currenciesStatusType.LOADING);

  useEffect(() => {
    const request_currency = async () => {
      return await Axios.get('/api/currency');
    }
    request_currency().then((response: AxiosResponse) => {
      setCurrenciesStatus(currenciesStatusType.SUCCESS);
      setCurrencies(response.data);
    }).catch(() => {
      setCurrenciesStatus(currenciesStatusType.FAILED);
    });
  }, [])

  const handleInput = (e: any, index: number) => {
    currencies[index].rate = e.target.value;
    setCurrencies([...currencies]);
  }

  const renderCurennies = () => {
    return currencies.map((currency: any, index: number) => {
      return (
        <div key={index} className={"flex flex-row items-center w-full h-16 p-2 text-gray-500 border border-black rounded-lg bg-dark-100"}>
          <h1 className={"flex items-center justify-center w-1/12 h-12"} >{currency.name}</h1>
          <input value={1} disabled className={"w-4/12 h-12 text-2xl text-center text-green-300 outline-none bg-dark-200"} type="text" />
          <h1 className={"flex items-center justify-center w-1/12 h-12 text-center"} >Toman</h1>
          <input onChange={(e: any) => handleInput(e, index)} value={currency.rate} className={"w-4/12 h-12 text-2xl text-center text-green-200 outline-none bg-dark-200"} type="text" />
          <button className={"w-4/12 h-12 ml-5 text-xl text-center text-gray-500 outline-none bg-dark-200"}>update</button>
        </div>
      )
    });
  }

  return (
    <>
      <Header />
      <div className={"flex h-screen"}>
        <div className={"flex w-10/12 h-auto bg-dark-200"}>
          <div className={"flex flex-col w-10/12 h-auto p-2 mx-auto"}>
            <SWITCH variable={currenciesStatus}>
              <CASE check={currenciesStatusType.SUCCESS}>
                {renderCurennies()}
              </CASE>
              <CASE check={currenciesStatusType.FAILED}>
                <h1 className={"text-3xl text-white"}>failed</h1>
              </CASE>
              <DEFAULT>
                <h1 className={"text-3xl text-white"}>loading</h1>
              </DEFAULT>
            </SWITCH>
          </div>
        </div>
        <Sidebar user={user} />
      </div>
    </>
  )
}

export default AdminDashboard
