import { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import SWITCH, { CASE, DEFAULT } from '../../components/Logics/Switch';
import Spinner from '../../components/Spinner';
import { Axios } from '../../helper/axios_config';
import RenderGamePrice from './RenderGamePrice';

interface Iprops {
  steamID: string,
  state: any
}
enum gameStatusType {
  LOADING,
  SUCCESS,
  FAILED
}
const GameInfo = (props: any) => {
  const { steamID } = props.location.state;
  const [game, setGame] = useState<any>([]);
  const [gameStatus, setGameStatus] = useState(gameStatusType.LOADING);
  // console.log(props.location.state);
  useEffect(() => {
    request_game();
  }, [])

  const request_game = () => {
    const request = Axios.post('/game_info', { steamID: steamID });
    request.then((response: AxiosResponse) => {
      setGameStatus(gameStatusType.SUCCESS);
      console.log({ response });
      setGame(response.data);
    }).catch((err: AxiosError) => {
      setGameStatus(gameStatusType.FAILED);
      toast.error('not found')
    });
  }

  return (
    <>
      <div className={"w-full h-screen bg-dark-300"}>
        <Header />
        <div className={"flex"}>
          <div className={'relative flex flex-row flex-wrap w-full h-auto bg-dark-200'}>
            <SWITCH variable={gameStatus}>
              <CASE check={gameStatusType.SUCCESS}>
                <div className={"flex flex-col flex-wrap w-4/12 h-auto bg-gradient-to-t from-gray-800 to-dark-300"}>
                  <div className={'sticky top-0'}>
                    <RenderGamePrice prices={game.prices} />
                  </div>
                </div>
                <div className={"flex flex-col flex-wrap w-8/12 h-auto bg-gradient-to-t from-gray-800 to-dark-300"}>
                  <div className={"flex flex-col w-full h-auto overflow-hidden text-white"}>
                    <h1 dir={'ltr'} className={"flex items-center h-16 mx-5 overflow-hidden text-xl font-semibold truncate"}>
                      {game.name}
                    </h1>
                  </div>
                  <img className={"object-fill w-full h-auto rounded-lg"} src={game.header_url} alt="" />
                  <div className={"flex flex-row flex-wrap w-full h-auto bg-dark-200"}>
                    <button className={"flex items-center justify-center w-full h-20 text-2xl text-center text-white border border-t-0 border-b-0 border-dark-300"}>
                      <span>خرید از طریق پشتیبانی</span>
                    </button>
                  </div>
                  <div className={"flex flex-row flex-wrap w-full h-auto bg-gradient-to-t from-gray-800 to-dark-300"}>
                    <Link to={"/login"} className={"flex items-center w-full h-20 p-5 text-3xl font-semibold text-indigo-500 border border-black bg-dark-300 hover:bg-black hover:text-"}>
                      <FaTelegram size={44} />
                      <h1 className={"mx-10"}>@MaxGift</h1>
                    </Link>
                    <Link to={"/login"} className={"flex items-center w-full h-20 p-5 text-3xl font-semibold text-pink-500 border border-black bg-dark-300 hover:bg-black hover:text-"}>
                      <FaInstagram size={44} />
                      <h1 className={"mx-10"}>@MaxGift</h1>
                    </Link>
                    <Link to={"/login"} className={"flex items-center w-full h-20 p-5 text-3xl font-semibold text-green-600 border border-black bg-dark-300 hover:bg-black hover:text-"}>
                      <FaWhatsapp size={44} />
                      <h1 className={"mx-10"}>09395850082</h1>
                    </Link>
                  </div>
                  <div className={"flex flex-row flex-wrap w-full h-auto bg-dark-200"}>
                    <button className={"flex items-center justify-center w-full h-20 text-2xl text-center text-white border border-t-0 border-b-0 border-dark-300"}>
                      <span>خرید انلاین</span>
                    </button>
                  </div>
                  <div className={"flex flex-row flex-wrap items-center justify-center w-full h-auto p-5 text-xl text-white bg-dark-300"}>
                    <h1>سامانه پرداخت انلاین فعال نمی باشد</h1>
                  </div>
                </div>
              </CASE>
              <CASE>
                <h1>failed</h1>
              </CASE>
              <DEFAULT>
                <Spinner />
              </DEFAULT>
            </SWITCH>
          </div>
        </div>
      </div >
    </>
  )
}

export default GameInfo
