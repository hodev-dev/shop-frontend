import React from 'react';
import GameCard from './Card';

interface Iprops {
  collections: any
}

const Collections = (props: Iprops) => {
  const { collections } = props;

  const renderCollectionGames = (collection: any) => {
    if (collection.games.length > 0) {
      return collection.games.map((game: any, index: number) => {
        return (
          <GameCard game={game} />
        );
      })
    }
  }

  const renderCollections = () => {
    return collections.map((collection: any, index: number) => {
      return (
        <>
          <div className={"flex flex-row-reverse items-center w-full h-16 p-8 border border-black bg-dark-300"}>
            <h2 className={"text-2xl font-semibold text-white"}>{collection.name}</h2>
            <h4 className={"flex-1 text-white text-1xl"}>موارد بیشتر</h4>
          </div>
          <div dir="rtl" className={"flex w-full h-auto overflow-x-scroll border border-black bg-gradient-to-b from-blue-900 to-dark-300 "}>
            {renderCollectionGames(collection)}
            {/* {console.log(collection.games)} */}
          </div>
        </>
      )
    });
  }
  return (
    <>
      {renderCollections()}
    </>
  )
}

export default Collections
