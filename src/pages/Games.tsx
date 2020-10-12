import { AxiosError, AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import GiftPanel from '../components/GiftPanel'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SWITCH, { CASE, DEFAULT } from '../components/Logics/Switch'
import Spinner from '../components/Spinner'
import { Axios } from '../helper/axios_config'

enum gamesStatusType {
  LOADING,
  SUCCESS,
  FAILED
}

const GamesRenderer = (props: any) => {
  const { page } = props;
  console.log(page);
  const renderPrice = (game: any) => {
    if (game.prices.length > 0) {
      return (
        <>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'region'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{game.prices[0].currency.name}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'price'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{Math.ceil(game.prices[0].price / 100) + '$'}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'discount'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{game.prices[0].discount_percent + '%'}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'final price'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{String(Math.ceil(game.prices[0].final_price) * game.prices[0].currency.rate / 100).replace(/(.)(?=(\d{3})+$)/g, '$1,')}</h1>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'region'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{'-'}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'price'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{'-'}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'discount'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{'-'}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'discount'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{'-'}</h1>
          </div>
        </>
      )
    }

  }

  return page.data.map((game: any, index: number) => {
    return (
      <div key={index} className={"flex flex-col flex-wrap w-4/12 h-auto bg-gradient-to-t from-gray-800 to-dark-300"}>
        <img className={"w-full rounded-lg h-34"} src={game.header_url} alt="" />
        <div className={"flex flex-col w-full h-auto overflow-hidden text-white"}>
          <h1 dir={'ltr'} className={"flex items-center h-16 mx-5 overflow-hidden text-xl font-semibold truncate"}>
            {game.name}
          </h1>
          <div dir={"rtl"}>
            {renderPrice(game)}
          </div>
        </div>
        <div className={"flex items-center justify-center w-full h-16 text-green-300 bg-green-800 border border-t-0 border-black text-1xl"}>اطلاعات بازی</div>
      </div>
    );
  });
}
const Paginator = (props: any) => {
  const { page } = props;
  return page.links.map((link: any) => {
    return (
      <div className={"flex flex-row items-center justify-center w-1/12 h-16 p-5 text-2xl text-white border border-black bg-dark-100"}>
        <h1 className={"w-fill"}>{link.label}</h1>
      </div>
    )
  });
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
                  <Paginator page={page} />
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
