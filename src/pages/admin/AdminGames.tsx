import Axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/admin/Sidebar';
import Header from '../../components/Header';
import SWITCH, { CASE, DEFAULT } from '../../components/Logics/Switch';
import Spinner from '../../components/Spinner';
import { IauthReducer } from '../../reducers/authReducer';
import { IApplicationState } from '../../reducers/rootReducer';

enum gamesStatusType {
  LOADING,
  SUCCESS,
  FAILED
}


const AdminGames = () => {

  const { user } = useSelector((store: IApplicationState): IauthReducer => store.authReducer);
  const [games, setGames] = useState<any>([]);
  const [gamesStatus, setGamesStatus] = useState<number>(gamesStatusType.LOADING);

  useEffect(() => {
    const request_games = async () => {
      return await Axios.get('/api/games');
    }
    request_games().then((response: AxiosResponse) => {
      setGamesStatus(gamesStatusType.SUCCESS);
      setGames(response.data);
    }).catch(() => {
      setGamesStatus(gamesStatusType.FAILED);
    });
  }, [])

  const renderGamces = () => {
    return games.map((game: any) => {
      return (
        <div className={"flex flex-row items-center w-full h-16 p-2 text-gray-500 border border-black rounded-lg bg-dark-100"}>
          {game.name}
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
            <h1 className={"w-full h-16 text-4xl text-gray-500"}>Recent Game List</h1>
            <SWITCH variable={gamesStatus}>
              <CASE check={gamesStatusType.SUCCESS}>
                {renderGamces()}
              </CASE>
              <CASE check={gamesStatusType.FAILED}>
                <h1 className={"text-3xl text-white"}>failed</h1>
              </CASE>
              <DEFAULT>
                <Spinner />
              </DEFAULT>
            </SWITCH>
          </div>
        </div>
        <Sidebar user={user} />
      </div>
    </>
  )
}

export default AdminGames
