import React, { useEffect } from 'react';

interface Iprops {
  game: any
}

const GameCard = (props: Iprops) => {
  const { game } = props;

  useEffect(() => {
    console.log({ game })
  }, [game])


  const renderPrice = () => {
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

  return (
    <>
      <div className={"h-auto ml-8 rounded-lg shadow-xl min-w-25 max-w-25 bg-gradient-to-t from-gray-800 to-dark-300"}>
        <img className={"object-scale-down w-full h-34"} src={game.header_url} alt="" />
        <div className={"flex flex-col w-full h-24 p-4 overflow-hidden text-white"}>
          <h1 dir={'ltr'} className={"overflow-hidden text-xl font-semibold"}>
            {game.name}
          </h1>
        </div>
        {renderPrice()}
        <div className={"flex items-center justify-center w-full h-16 text-green-300 bg-green-800 border border-t-0 border-black text-1xl"}>اطلاعات بازی</div>
      </div>
    </>
  )
}

export default GameCard
