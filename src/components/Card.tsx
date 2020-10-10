import React, { useEffect } from 'react';

interface Iprops {
  game: any
}

const GameCard = (props: Iprops) => {
  const { game } = props;

  useEffect(() => {
    console.log({ game })
  }, [])

  const renderPrices = () => {

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
        <div className={"flex items-center justify-center w-full h-16 text-gray-200 border text-1xl border-dark-300"}>
          <h1 className={"flex items-center justify-center w-1/2 h-auto"}>price</h1>
          <h1 className={"flex items-start justify-center w-1/2 h-auto"}>56$</h1>
        </div>
        <div className={"flex items-center justify-center w-full h-16 text-blue-200 border text-1xl border-dark-300"}>
          <h1 className={"flex items-center justify-center w-1/2 h-auto"}>قیمت به تومان</h1>
          <h1 className={"flex items-start justify-center w-1/2 h-auto"}>1,400,000</h1>
        </div>
        <div className={"flex items-center justify-center w-full h-16 text-green-300 bg-green-800 border border-t-0 border-black text-1xl"}>اطلاعات بازی</div>
      </div>
    </>
  )
}

export default GameCard
