import { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../../components/admin/Sidebar';
import Header from '../../../components/Header';
import SWITCH, { CASE, DEFAULT } from '../../../components/Logics/Switch';
import Spinner from '../../../components/Spinner';
import { Axios } from '../../../helper/axios_config';
import { IauthReducer } from '../../../reducers/authReducer';
import { IApplicationState } from '../../../reducers/rootReducer';
import Game from './Game';

enum gamesStatusType {
  LOADING,
  SUCCESS,
  FAILED
}

enum currencyStatusType {
  LOADING,
  SUCCESS,
  FAILED
}
const AdminGames = () => {

  const { user } = useSelector((store: IApplicationState): IauthReducer => store.authReducer);
  const [games, setGames] = useState<any>([]);
  const [gamesStatus, setGamesStatus] = useState<number>(gamesStatusType.LOADING);
  const [regions, setRegions] = useState<Array<string>>([]);
  const [regionsStatus, setRegionStatus] = useState<number>(currencyStatusType.LOADING);
  const [steamID, setSteamID] = useState<Number | string>('');
  const [select, setSelect] = useState<string | null>(null);

  useEffect(() => {
    request_regions();
    request_games();
  }, [])

  useEffect(() => {
    console.log(select);
  }, [select])

  const handleSelectChange = (e: any) => {
    setSelect(e.target.value);
  }
  const HandleSteamIDInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSteamID(Number(event.currentTarget.value));
  }

  const add_game_with_id = async () => {
    if (steamID !== null) {
      const request = Axios.post("/api/steam", { steamID: steamID });
      request.then((response: AxiosResponse) => {
        request_games();
        toast.success("adding game wass successfull")
      }).catch((err: AxiosError) => {
        toast.error("something wrong!")
      })
    }
  }

  const add_price_for_region = async () => {
    if (steamID !== null && select !== null) {
      const request = Axios.post("/api/price", { steamID: steamID, region: select });
      request.then((reponse: AxiosResponse) => {
        toast.success("new price added");
        request_games();
      }).catch((err: AxiosError) => {
        toast.error("something wrong!");
      });
    }
  }

  const request_games = () => {
    const request = Axios.get('/api/games');
    request.then((response: AxiosResponse) => {
      setGamesStatus(gamesStatusType.SUCCESS);
      setGames(response.data);
    }).catch(() => {
      setGamesStatus(gamesStatusType.FAILED);
    });
  }

  const request_regions = () => {
    const currencies_request = Axios('api/currency');
    currencies_request.then((currencies_response: AxiosResponse) => {
      if (currencies_response.status === 200) {
        let arr: any = [];
        currencies_response.data.map((currency: any) => {
          arr.push(currency.name);
          return currencyStatusType.SUCCESS;
        });
        setRegionStatus(currencyStatusType.SUCCESS)
        setRegions(arr);
        setSelect(arr[0]);
      } else {
        setRegionStatus(currencyStatusType.FAILED)
        return currencyStatusType.FAILED;
      }
    });
  }

  const renderRegionsCurrencies = () => {
    return regions.map((region: string, index: number) => {
      return (
        <option key={index} className={"text-3xl text-white"}>{region}</option>
      )
    })
  }

  return (
    <>
      <Header />
      <div className={"flex h-screen"}>
        <div className={"flex flex-col w-10/12 h-auto overflow-y-auto bg-dark-200"}>
          <div className={"flex flex-col w-10/12 h-auto p-2 mx-auto"}>
            <h1 className={"w-full h-16 text-4xl text-gray-500"}>Add Steam Game</h1>
            <div key={1} className={"flex flex-row items-center w-full h-16 p-2 text-gray-500 border border-black rounded-lg just bg-dark-100"}>
              <h1 className={"flex items-center justify-center w-1/12 h-12"} >SteamID</h1>
              <input value={Number(steamID)} onChange={HandleSteamIDInput} className={"w-9/12 h-12 text-2xl text-center text-white outline-none bg-dark-200"} type="text" />
              <button onClick={add_game_with_id} className={"w-2/12 h-12 ml-5 text-center text-green-200 outline-none bg-dark-200"}>Get Steam Game</button>
            </div>
          </div>
          <div className={"flex flex-col w-10/12 h-auto p-2 mx-auto"}>
            <h1 className={"w-full h-16 text-4xl text-gray-500"}>Get Price</h1>
            <div key={1} className={"flex flex-row items-center w-full h-16 p-2 text-gray-500 border border-black rounded-lg just bg-dark-100"}>
              <h1 className={"flex items-center justify-center w-1/12 h-12"} >SteamID</h1>
              <input value={Number(steamID)} onChange={HandleSteamIDInput} className={"w-4/12 h-12 text-2xl text-center text-white outline-none bg-dark-200"} type="text" />
              <h1 className={"flex items-center justify-center w-1/12 h-12"} >Region</h1>
              <select onChange={handleSelectChange} className={"w-4/12 h-12 p-2 text-2xl text-center text-white outline-none bg-dark-200"} name="cars" id="cars">
                <SWITCH variable={regionsStatus}>
                  <CASE check={currencyStatusType.SUCCESS}>
                    {renderRegionsCurrencies()}
                  </CASE>
                  <CASE check={currencyStatusType.FAILED}>
                    <option className={"text-3xl text-white"}>failed</option>
                  </CASE>
                  <DEFAULT>
                    <option className={"text-3xl text-white"}>loading</option>
                  </DEFAULT>
                </SWITCH>
              </select>
              <button onClick={add_price_for_region} className={"w-2/12 h-12 ml-5 text-center text-green-200 outline-none bg-dark-200"}>Get Regions Price</button>
            </div>
          </div>
          <div className={"flex flex-col w-10/12 h-auto p-2 mx-auto"}>
            <h1 className={"w-full h-16 text-4xl text-gray-500"}>Recent Game List</h1>
            <SWITCH variable={gamesStatus}>
              <CASE check={gamesStatusType.SUCCESS}>
                <Game games={games} />
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
