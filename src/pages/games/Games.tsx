import { AxiosError, AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import GiftPanel from '../../components/GiftPanel'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import SWITCH, { CASE, DEFAULT } from '../../components/Logics/Switch'
import Spinner from '../../components/Spinner'
import { Axios } from '../../helper/axios_config'
import GamesRenderer from './GameRenderer'
import Paginator from './Paginator'

enum gamesStatusType {
  LOADING,
  SUCCESS,
  FAILED
}
const Games = () => {
  const [page, setPage] = useState<any>({});
  const [pageStatus, setPageStatus] = useState<number>(gamesStatusType.LOADING);

  useEffect(() => {
    request_games_with_paginate();
  }, [])

  const request_games_with_paginate = async () => {
    const request_page = Axios.get('/games_paginate');
    request_page.then((response: AxiosResponse) => {
      setPage(response.data);
      setPageStatus(gamesStatusType.SUCCESS);
    }).catch((err: AxiosError) => {
      setPageStatus(gamesStatusType.FAILED);
    });
  }

  const navigate = (url: string) => {
    if (url !== null) {
      setPageStatus(gamesStatusType.LOADING);
      const request_page = Axios.get(url);
      request_page.then((response: AxiosResponse) => {
        setPage(response.data);
        setPageStatus(gamesStatusType.SUCCESS);
      }).catch((err: AxiosError) => {
        setPageStatus(gamesStatusType.FAILED);
      });
    }
  }

  return (
    <>
      <div className={"w-full h-screen bg-dark-300"}>
        <Header />
        <Hero />
        <GiftPanel />
        <div className={"flex"}>
          <div className={'flex flex-row flex-wrap w-full h-auto bg-dark-200'}>
            <SWITCH variable={pageStatus}>
              <CASE check={gamesStatusType.SUCCESS}>
                <GamesRenderer page={page} />
                <div className={"flex flex-row flex-wrap items-center w-full"}>
                  <Paginator page={page} navigate={navigate} />
                </div>
              </CASE>
              <CASE check={gamesStatusType.FAILED}>
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

export default Games
