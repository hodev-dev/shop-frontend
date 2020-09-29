import React, { useState } from 'react'
import { FaApple, FaPlaystation, FaSteamSymbol } from 'react-icons/fa'
import GiftPanel from '../components/GiftPanel'
import Header from '../components/Header'
import Hero from '../components/Hero'

const GiftCards = () => {
  const initCards = [
    {
      id: 1,
      name: "PlayStation",
      items: [
        {
          id: '1-1',
          price_in_dollar: "5$",
          price_in_toman: "150000"
        },
        {
          id: '1-2',
          price_in_dollar: "10$",
          price_in_toman: "150000"
        },
        {
          id: '1-3',
          price_in_dollar: "15$",
          price_in_toman: "150000"
        },
        {
          id: '1-4',
          price_in_dollar: "25$",
          price_in_toman: "150000"
        },
        {
          id: '1-5',
          price_in_dollar: "50$",
          price_in_toman: "150000"
        },
        {
          id: '1-6',
          price_in_dollar: "100$",
          price_in_toman: "150000"
        },
        {
          id: '1-3',
          price_in_dollar: "15$",
          price_in_toman: "150000"
        },
        {
          id: '1-4',
          price_in_dollar: "25$",
          price_in_toman: "150000"
        },
        {
          id: '1-5',
          price_in_dollar: "50$",
          price_in_toman: "150000"
        },
        {
          id: '1-6',
          price_in_dollar: "100$",
          price_in_toman: "150000"
        }
      ]
    },
    {
      id: 2,
      name: "Apple Store",
      items: [
        {
          id: '2-1',
          price_in_dollar: "5$",
          price_in_toman: "150000"
        },
        {
          id: '2-2',
          price_in_dollar: "10$",
          price_in_toman: "150000"
        },
        {
          id: '2-3',
          price_in_dollar: "15$",
          price_in_toman: "150000"
        },
        {
          id: '2-4',
          price_in_dollar: "25$",
          price_in_toman: "150000"
        },
        {
          id: '2-5',
          price_in_dollar: "50$",
          price_in_toman: "150000"
        },
        {
          id: '2-6',
          price_in_dollar: "100$",
          price_in_toman: "150000"
        }
      ]
    },
    {
      id: 3,
      name: "Steam Wallet",
      items: [
        {
          id: '3-1',
          price_in_dollar: "5$",
          price_in_toman: "150000"
        },
        {
          id: '3-2',
          price_in_dollar: "10$",
          price_in_toman: "150000"
        },
        {
          id: '3-3',
          price_in_dollar: "15$",
          price_in_toman: "150000"
        },
        {
          id: '3-4',
          price_in_dollar: "25$",
          price_in_toman: "150000"
        },
        {
          id: '3-5',
          price_in_dollar: "50$",
          price_in_toman: "150000"
        },
        {
          id: '3-6',
          price_in_dollar: "100$",
          price_in_toman: "150000"
        },
      ]
    },
  ]

  const [cards] = useState(initCards);

  const renderCardBaseOnCategory = (collection: any, items: any) => {
    switch (collection.id) {
      case 1:
        return (
          <div key={items.id} className={"flex flex-col items-center justify-center w-full h-auto mx-5"}>
            <div className={"flex flex-col items-center justify-center w-64 h-64 ml-5 text-3xl font-semibold leading-none text-blue-800 transition duration-300 ease-in-out transform bg-white rounded-md hover:bg-blue-800 hover:text-white hover:scale-y-110"}>
              <FaPlaystation size={64} />
              <span className={"mt-4"}>{collection.name}</span>
              <span className={"mt-4 text-6xl"}>{items.price_in_dollar}</span>
            </div>
            <h1 className={"mt-4 text-2xl text-white"}>{items.price_in_toman}</h1>
          </div>
        );
      case 2:
        return (
          <div key={items.id} className={"flex flex-col items-center justify-center w-full h-auto mx-5"}>
            <div className={"flex flex-col items-center justify-center w-64 h-64 ml-5 text-3xl font-semibold leading-none transition duration-300 ease-in-out transform bg-white rounded-md text-black-900 hover:bg-black hover:text-white hover:scale-110"}>
              <FaApple size={64} />
              <span className={"mt-4"}>{collection.name}</span>
              <span className={"mt-4 text-6xl"}>{items.price_in_dollar}</span>
            </div>
            <h1 className={"mt-4 text-2xl text-white"}>{items.price_in_toman}</h1>
          </div>
        );
      case 3:
        return (
          <div key={items.id} className={"flex flex-col items-center justify-center w-full h-auto mx-5"}>
            <div className={"flex flex-col items-center justify-center w-64 h-64 ml-5 text-3xl font-semibold leading-none text-purple-900 transition duration-300 ease-in-out transform bg-white rounded-md hover:bg-purple-900 hover:text-white hover:scale-110"}>
              <FaSteamSymbol size={64} />
              <span className={"mt-4"}>{collection.name}</span>
              <span className={"mt-4 text-6xl"}>{items.price_in_dollar}</span>
            </div>
            <h1 className={"mt-4 text-2xl text-white"}>{items.price_in_toman}</h1>
          </div>
        );
      default:
        return null;
    }
  }

  const renderItems = (collection: any) => {
    return collection.items.map((cards: any) => {
      return renderCardBaseOnCategory(collection, cards);
    });
  }

  const renderCollections = () => {
    return cards.map((collection: any) => {
      return (
        <div key={collection.id}>
          <div className={"flex flex-row-reverse items-center w-full h-16 p-8 border border-black bg-dark-300"}>
            <h2 className={"text-3xl text-white"}>{collection.name}</h2>
          </div>
          <div dir="rtl" className={"flex w-full h-auto p-8 overflow-x-auto overflow-y-auto border border-black bg-dark-200"}>
            {renderItems(collection)}
          </div>
        </div>
      )
    });
  }

  return (
    <div className={"w-full h-auto bg-dark-300"}>
      <Header />
      <Hero />
      <GiftPanel />
      {renderCollections()}
    </div >
  )
}

export default GiftCards
