import React from 'react';
import { Link } from 'react-router-dom';

const GamesRenderer = (props: any) => {
  const { page } = props;
  const renderPrice = (game: any) => {
    if (game.prices.length > 0) {
      return (
        <>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'ریجن'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{game.prices[0].currency.name}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'قیمت'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{Math.ceil(game.prices[0].price / 100) + '$'}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'تخفیف'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{game.prices[0].discount_percent + '%'}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'قیمت نهایی'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{String(game.prices[0].final_price / 100 * game.prices[0].currency.rate).replace(/(.)(?=(\d{3})+$)/g, '$1,') + ' ' + 'تومان'}</h1>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'ریجن'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{'-'}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'قیمت'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{'-'}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'تخفیف'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{'-'}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'قیمت نهایی'}</h1>
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
        <Link to={{ pathname: 'gameinfo', state: { steamID: game.steam_id } }} className={"flex items-center justify-center w-full h-16 text-green-300 bg-green-800 border border-t-0 border-black text-1xl"}>اطلاعات بازی</Link>
      </div>
    );
  });
}

export default GamesRenderer;