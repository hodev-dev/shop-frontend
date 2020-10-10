import React from "react";

const Game = (props: { games: any }) => {
  const { games } = props;

  const renderPrices = (prices: any) => {
    if (prices.length > 0) {
      return prices.map((price: any, index: any) => {
        return (
          <div key={index} className={"flex flex-row items-center justify-center w-full h-16 p-2 text-gray-500 border border-black rounded-lg bg-dark-100"}>
            <h1 className={"flex items-center justify-center w-1/6 mx-auto text-gray-200"}>{price.currency.name}</h1>
            <h1 className={"flex items-center justify-center w-1/6 mx-auto text-gray-200"}>{price.price / 100}</h1>
            <h1 className={"flex items-center justify-center w-1/6 mx-auto text-gray-200"}>{price.currency.rate}</h1>
            <h1 className={"flex items-center justify-center w-1/6 mx-auto text-gray-200"}>{String(price.price / 100 * price.currency.rate).replace(/(.)(?=(\d{3})+$)/g, '$1,')}</h1>
          </div>
        )
      });
    } else {
      return (
        <div className={"flex flex-row items-center justify-center w-full h-16 p-2 text-gray-500 border border-black rounded-lg bg-dark-100"}>
          <h1 className={"flex items-center justify-center w-1/6 mx-auto text-gray-200"}>{"No Price"}</h1>
        </div>
      )
    }
  }

  if (games.length !== 0) {
    return games.map((game: any, index: number) => {
      return (
        <div key={index} className={"flex flex-col w-full"}>
          <div className="flex flex-row w-full">
            <img className={"w-3/12 h-32"} src={game.header_url} alt="" />
            <div className={"flex flex-col w-full"}>
              <div className={"flex flex-row items-center w-full h-16 p-5 text-gray-500 border border-black rounded-lg bg-dark-100"}>
                <h1 className={"w-9/12 ml-5 text-xl text-gray-100"}>{game.name}</h1>
                <h1 className={"w-3/12 ml-5 text-xl text-gray-500"}>steamid: {' '}{game.steam_id}</h1>
              </div>
              <div className={'flex flex-col items-end justify-center w-full h-auto'}>
                <div className={"flex flex-row items-center justify-center w-full h-16 p-2 text-gray-500 border border-black rounded-lg bg-dark-100"}>
                  <h1 className={"flex items-center justify-center w-1/6 mx-auto font-semibold text-green-200"}>{"region"}</h1>
                  <h1 className={"flex items-center justify-center w-1/6 mx-auto font-semibold text-yellow-200"}>{'price'}</h1>
                  <h1 className={"flex items-center justify-center w-1/6 mx-auto font-semibold text-blue-200"}>{'price rate'}</h1>
                  <h1 className={"flex items-center justify-center w-1/6 mx-auto font-semibold text-pink-200"}>{'final price'}</h1>
                </div>
                {renderPrices(game.prices)}
              </div>
            </div>
          </div>
        </div>
      )
    });
  } else {
    return (
      <div className={"flex flex-row items-center w-full h-16 p-5 text-gray-500 border border-black rounded-lg bg-dark-100"}>
        <h1>No Game Found</h1>
      </div>
    )
  }
}
export default React.memo(Game);